import User from "../models/User.js";

export const getUserController = async (req, res) => {
  const { email } = req.params
  // Find user with the given email
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    res.send("Get User Error: ", err)
  }
  res.json(existingUser);
}

export const putUserController = async (req, res) => {
  const {uniqueId, email, schedules, friendlist, points} = req.body
  
  const user = new User({
    uniqueId: uniqueId,
    email: email,
    schedules: schedules,
    friendlist: friendlist,
    points: points,
  })

  try {
    await user.save();
  } catch (err) {
    res.send(err)
  }
  
  res.send("200: Put User Success!")
}