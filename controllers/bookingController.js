import Booking from "../modules/bookingModule.js";


export async function createBooking(req, res, next) {
  try {
    const data = req.body;
    const booking = await Booking.create(data);
    if (booking) {
      res.status(200).json({
        status: "Created",
        booking,
      });
    } else {
      res.status(400).json({
        status: "Bad Request",
        message: "Invalid Credential",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
}

export async function updateBooking(req, res, next) {
  try {
    const data = req.body;
    const booking = await Booking.findByIdAndUpdate(data.id,data)
    if (booking) {
      res.status(201).json({
        status: "UPdated",
        booking,
      });
    } else {
      res.status(400).json({
        status: "Bad Request",
        message: "Invalid Credential",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
}
export async function bookingList(req, res, next) {
    try {
      const booking = await Booking.find()
      if (booking) {
        res.status(200).json({
          status: "Sucess",
          booking,
        });
      } else {
        res.status(400).json({
          status: "Bad Request",
          message: "Something went wrong!!! ",
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  export async function bookingDetails(req, res, next) {
    try {
      const bookingId=req.params.bookingId
      const booking = await Booking.findById({_id:bookingId})
      if (booking) {
        res.status(200).json({
          status: "Sucess",
          booking,
        });
      } else {
        res.status(400).json({
          status: "Bad Request",
          message: "Something went wrong!!! ",
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  }