import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";

import {
    BsFillBarChartFill,
    BsFillBagFill,
    BsFillInboxFill,
    BsFillPersonFill,
    BsGearFill,
    BsPower,
} from "react-icons/bs";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";

function Sidebar({ name, email }) {
    let navigate = useNavigate()
    const logOut = async () => {
        try {
            await auth.signOut()
            navigate('/LogIn')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Card className=" p-4 shadow-xl shadow-blue-gray-900/5 border-2 absolute -left-72 top-16 z-50 ">
            <div className="mb-2 p-4 relative">
                <Typography variant="h5" color="blue-gray" >
                
                    <h3>{name}</h3>
                    <p>{email}</p>
                </Typography>
            </div>
            <List className="relative">
                <ListItem>
                    <ListItemPrefix>
                        <BsFillBarChartFill className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem onClick={()=>navigate('/Profile/MyLearning')}>
                    <ListItemPrefix>
                        <FaChalkboardTeacher className="h-5 w-5" />
                    </ListItemPrefix>
                    My Learning
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <BsFillInboxFill className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <BsFillPersonFill className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <BsGearFill className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem onClick={() => logOut()}>
                    <ListItemPrefix>
                        <BsPower className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
export default Sidebar