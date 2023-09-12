import person_model from "../model/person_model.js"

export async function createPerson(req, res) {
    const { name, value } = req.body
    if (!name) return res.status(404).send({ "message": "Please provide a name" })
    if (!value) return res.status(404).send({ "message": "Please provide characteristics of the person" })

    const existingUser = await person_model.find({
        $or: [{ name }, { value }],
    }).catch((e) => {
        return res.status(500).send({ "message": e })
    })
    if (existingUser.length > 0) {
        return res
            .status(409)
            .json({ message: "User already exists" });
    } else {
        const person = new person_model({
            name: name,
            value: value
        })

        try {
            person.save().then((result) => {
                return res.status(200).send({
                    id: result._id,
                    name: result.name,
                    value: result.value
                })
            }).catch((e) => {
                return res.status(404).send({ "message": 'Invalid user Id' })
            })
        } catch (error) {

            return res.status(500).send({ "message": error })
        }
    }

}


export async function readPerson(req, res) {
    const { user_id } = req.params

    if (!user_id) return res.status(404).send({ "message": "Please provide an id" })

    try {
        person_model.findById(user_id).then((person) => {
            if (!person) return res.status(404).send({ message: "User not found" })

            return res.status(200).send({
                id: person._id,
                name: person.name
            })
        }).catch((e) => {
            return res.status(404).send({ message: "Invalid user Id" })
        })
    } catch (error) {

        return res.status(500).send({ "message": "Internal Server Error" })
    }

}

export async function updatePerson(req, res) {
    const { name, value } = req.body
    const { user_id } = req.params

    if (!user_id) return res.status(404).send({ "message": "Please provide an id" })
    if (!name && !value) return res.status(404).send({ "message": "Please provide a name or value to update" })

    const updateData = {
        ...(name && { name }),
        ...(value && { value })
    }

    try {
        person_model.findByIdAndUpdate(
            user_id,
            updateData,
            { new: true }
        ).then((updatedPerson) => {
            if (!updatedPerson) {
                return res.status(404).send({ message: "User not found" });
            }
            return res.status(200).send({
                id: updatedPerson._id,
                name: updatedPerson.name,
                value: updatedPerson.value
            });
        }).catch((error) => {
            return res.status(500).send({ message: "Invalid user Id" });
        });
    } catch (error) {
        return res.status(500).send({ "message": "Internal Server Error" })
    }
}

export async function deletePerson(req, res) {
    const { user_id } = req.params
    if (!user_id) return res.status(404).send({ "message": "Please provide an id" })

    try {
        person_model
            .findByIdAndRemove(user_id)
            .then((deletedPerson) => {
                if (!deletedPerson) return res.status(404).send({ message: "User not found" });

                return res.status(202).send({
                    message: "User Removed Successfully"
                });
            })
            .catch((error) => {
                return res.status(500).send({ message: "Invalid user Id" });
            });
    } catch (error) {

        return res.status(500).send({ "message": "Internal Server Error" })
    }
}