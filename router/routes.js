import Router from "express";
import * as controller from '../controllers/person_controller.js'
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send({
        status: "E dey Shake for here"
    })
})
router.route('/api').post(controller.createPerson); /// Create
router.route('/api/:user_id').get(controller.readPerson); /// Read
router.route('/api/:user_id').put(controller.updatePerson); /// Update  (put)
router.route('/api/:user_id').patch(controller.updatePerson); /// Update (patch)
router.route('/api/:user_id').delete(controller.deletePerson); /// Delete



export default router;