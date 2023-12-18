const Profile = () => {
    return (
        <div className=" overflow-hidden h-full w-full bg-white">
            <div className="flex flex-col justify-center items-center space-y-4 pt-4">
                <div className="profileBox justify-start items-center bg-fitness w-[320px] bg-cover">/
                    <div className="float-right ">
                        <h4 className="text-red-500 text-clip">Hello <h2 className="underline">Amrit.</h2></h4>
                        <p className="text-black">Joined:</p>
                        <p className="text-black">1 year ago</p>
                        <p className="font-bold text-red-500">Profile</p>
                        <p className="font-bold text-red-500">Switch Account</p>
                        <p className="font-bold text-red-500">Log Out</p>
                    </div>
                </div>
                <div className="profileBox overflow-hidden outline py-8">

                    <div className="flex p-4">
                        <p className="profileDivText">First Name:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                    <hr />
                    <div className="flex p-4">
                        <p className="profileDivText">Last Name:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                    <hr />
                    <div className="flex p-4">
                        <p className="profileDivText">Date of Birth:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                    <hr />
                    <div className="flex p-4">
                        <p className="profileDivText">Sex:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                    <hr />
                    <div className="flex p-4">
                        <p className="profileDivText">Blood:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                    <hr />
                    <div className="flex p-4">
                        <p className="profileDivText">Height:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                    <hr />
                    <div className="flex p-4">
                        <p className="profileDivText">Weight:</p>
                        <input className="profileDivInput" placeholder="set >" />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Profile;