import User from "../models/User";

export const getUserController = async (req, res) => {
  const { email } = req.body
  
  // Find user with the given email
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    res.send(err)
  }
  
  res.send("200: Get User Success!")
}

export const putUserController = async (req, res) => {
  const {uniqueId, email, schedules, friendlist} = req.body
  
  const user = new User({
    uniqueId: uniqueId,
    email: email,
    schedules: schedules,
    friendlist: friendlist
  })

  try {
    await user.save();
  } catch (err) {
    res.send(err)
  }
  
  res.send("200: Put User Success!")
}