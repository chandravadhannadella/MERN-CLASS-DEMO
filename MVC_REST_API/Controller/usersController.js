const Users = require('../Model/users')
// Creating New User data
const CreateNewUser= async (req, res)=>{

    try {
            const  { UserId, UserName, UserEmail,
            UserPhone, UserAddress } = req.body;
            
            const NewUser = {
            "UserId"          :Number(UserId),
            "UserName"        :UserName,
            "UserEmail"       :UserEmail,
            "UserPhone"       :UserPhone,
            "UserAddress"     :UserAddress
            }

            const NewUserData = new Users(NewUser)
            const SaveUser = await NewUserData.save()

            res.status(200).json({
                "Message":"New User created success",
                "User":SaveUser,
            });
        } 
        catch(error){
            res.status(500).json({
                "Message":"Internal Server Error",
                "User":error.message
            });
        }
};


//Get All the User data
const GetAllUsers= async (req,res)=>{
    try{
            const ViewUsers=await Users.find();
            res.status(200).json({
                "Message":"Getting User details success",
                "User":ViewUsers,
            });
        } catch(error){
            res.status(500).json({
                "Message":"Internal Server Error",
                "User":error.message
            });
        }
}
// Get Only One user Infp
const GetOneUser= async (req, res)=>{
    try{
            var id = req.params.id;
            const ViewUsers=await Users.findOne( {UserId:id});
            if (!ViewUsers){
                return res.status(404).json({
                    "Message":"record not found"
                });
            }
            res.status(200).json({
                "Message":"Getting One User details success",
                "User":ViewUsers,
            });
        } catch(error){
            res.status(500).json({
                "Message":"Internal Server Error",
                "User":error.message
            });
        }
}

// Get single user by MongoDB _id
const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({ Message: "User not found" });
    }

    res.status(200).json({
      Message: "User fetched successfully",
      User: user,
    });
  } catch (error) {
    res.status(500).json({
      Message: "Internal server error",
      Error: error.message,
    });
  }
};

// Update user by _id
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const user = await Users.findByIdAndUpdate(id, updatedData, {
      new: true, // return updated document
      runValidators: true, // validate schema rules
    });

    if (!user) {
      return res.status(404).json({ Message: "User not found" });
    }

    res.status(200).json({
      Message: "User updated successfully",
      User: user,
    });
  } catch (error) {
    res.status(500).json({
      Message: "Internal server error",
      Error: error.message,
    });
  }
};

// Delete user by _id
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ Message: "User not found" });
    }

    res.status(200).json({
      Message: "User deleted successfully",
      User: user,
    });
  } catch (error) {
    res.status(500).json({
      Message: "Internal server error",
      Error: error.message,
    });
  }
};

module.exports ={
                    CreateNewUser,
                    GetAllUsers,
                    GetOneUser,
                    GetUserById,
                    UpdateUser,
                    DeleteUser
                };

