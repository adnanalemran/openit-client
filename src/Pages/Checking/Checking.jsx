import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from "../../Hook/useAxiosPublic";
import Info from '../Auth/Signin/Info';

const Checking = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [invalid, setInvalid] = useState(true); // corrected useState syntax
    const { data: user = [], isLoading, isError } = useQuery({ // added isLoading and isError
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/user/${id}`);
                setInvalid(false);
                return res.data;
            } catch (error) {
                setInvalid(true);
                throw new Error("User data not found");
            }
        },
    });

    if (isLoading) return <div>Loading...</div>; // added loading state handling

    return (
        <div className='p-4'>
            {isError || invalid ? ( // added error and invalid state handling
                "No user"
            ) : (
                <>
                    <Info />
                    <div className="py-8 px-4  ">

                        <p className="bg-base-300 w-full shadow-xl mx-auto max-w-md p-8  space-y-3 rounded-xl border my-5">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>

                            </div>
                            <br />
                            <br />
                            নাম: {user?.displayName}
                            <br /> তার পিতার নাম: {user?.userData?.fatherName}
                            <br /> তার মায়ের নাম: {user?.userData?.motherName}
                            <br />
                            তিনি জন্মেছেন: {user?.userData?.dateOfBirth}
                            <br />
                            তার শিক্ষাগত যোগ্যতা:
                            {user?.userData?.educationQualification}
                            <br />
                            তার পড়াশুনার স্থান: {user?.userData?.schoolUniversity}
                            <br />

                            তার বর্তমান ঠিকানা: {user?.userData?.presentAddress}
                            <br />
                            তার স্থায়ী ঠিকানা: {user?.userData?.permanentAddress}
                            <br />
                            তার এসএসসি রোল নম্বর:  {user?.userData?.sscRollNo},
                            রেজিস্ট্রেশন নম্বর: {user?.userData?.sscRegNo} <br />
                            এবং তিনি পাশ করেছেন: {user?.userData?.SSCBoardName} বোর্ডে,
                            পাশের বছর: {user?.userData?.passingYear}
                            <br />
                            তিনি বর্তমানে: {user?.course} কোর্সে নিবন্ধিত আছেন
                            <br />
                            আমরা তার সার্বিক মঙ্গল কামনা করছি |
                        </p>
                        <footer className="footer px-10 py-4 border-t    border-base-300  container mx-auto">
        <aside className="items-center grid-flow-col">
          <Link to="/">
            © 2021-2024 Open IT Institute. All Rights Reserved.
          </Link>
        </aside>
        <nav className="md:place-self-center md:justify-self-end ">
          <Link to="https://www.linkedin.com/in/adnanalemran">
            Developed by <samp className="text-orange-600"> Adnan al emran</samp>
          </Link>
        </nav>
      </footer>
                    </div>
                </>
            )}

        </div>
    );
};

export default Checking;
