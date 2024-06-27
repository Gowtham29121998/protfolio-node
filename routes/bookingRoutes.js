import { Router } from "express";
import { bookingDetails, bookingList, createBooking, updateBooking } from "../controllers/bookingController.js";

const router = Router();

router.route("/create").post(createBooking);
router.route("/update").post(updateBooking);
router.route('/list').get(bookingList);
router.route('/:bookingId').get(bookingDetails);

export default router;
