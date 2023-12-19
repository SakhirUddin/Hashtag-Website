import React from "react";
import '../index.css'
import './Profile.css'
import Search from '../Img/Searchicon.png'

import Strawberry from '../Img/strawberry.png'
import Icecream from '../Img/icecream.png'
import CripsyChicken from '../Img/cripsychicken.png'
import Chowmin from '../Img/chowmin.png'
import Eggroll from '../Img/eggroll.png'
import ButterNun from '../Img/butternun.png'

import upload from '../Img/Upload.png'
import person from '../Img/Person.png'
import bellicon from '../Img/Bellicon.png'



function LoginProfile() {
    return (
        <section className="w-[100%] h-[100vh]">
            <div className="container-fluid">
                <div className="image-div">
                    <div className=" NavLinks flex  container px-[70px] m-auto justify-between pt-5">
                        <div>
                            <h1 className="text-white text-3xl font-bold logo">#Hashtag</h1>
                        </div>
                        <div className="text-white flex buttonGroups">
                            <select className="px-[10px] bg-transparent mr-1 text-white">
                                <option>Explore</option>
                            </select>
                            <div className="doublebtns">
                                <img src={bellicon} alt="upload" />
                                <img src={person} alt="person" />
                                <div className="uploadSection">
                                    <img className="uploadImg"id="uploadImage" src={upload} alt="upload" />
                                    <input type="button" className="bg-white text-black w-28 h-12 rounded pl-4" value="Upload" />
                                    {/* <button type="button" className=" buttonUp  btn btn-light text-black bg-white">Upload</button> */}
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%] gap-3 container pb-8">
                        <h1 className="uppercase text-center t text-white heading">Let’s Find The Perfect Free <br /> Photo For You</h1>
                        <div className="w-3/4 relative searchPad">
                            <span className="top-[20px] left-[12px] absolute"><img src={Search} className="w-[15px]"></img></span>
                            <input className=" SearchPlace w-[100%] py-[15px] px-[40px] rounded text-[16px] outline-none" placeholder="Search for all images on #Hastag"></input>
                            <select className="absolute right-[15px] bg-transparent top-[16px] text-[13px]">
                                <option>All Images</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="container mt-4 flex flex-col gap-4 ">
                    <div>
                        <h1 className=" popularHastag text-[38px] popular-heading">Popular Hashtags</h1>
                    </div>
                    <div className=" btn-grps flex gap-3 text-start">
                        <button type="button" className=" border-[1px] h-[40px] w-[96px] rounded-lg">#Nature</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px] ">#Travel</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Food</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Fashion</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Happy</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Places</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Places</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Selfie</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Music</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Animals</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Lifestyle</button>
                        <button type="button" className=" border-[1px] h-[40px] rounded-lg w-[96px]">#Motivation</button>
                    </div>
      

                    <div className="container mt-[13px] flex flex-col gap-4 justify-center items-center">
                        <img src={Strawberry} className="w-[1057px] h-auto"></img>
                        <img src={Icecream} className="w-[1057px] h-auto"></img>
                        <img src={CripsyChicken} className="w-[1057px] h-auto"></img>
                        <img src={Chowmin} className="w-[1057px] h-auto"></img>
                        <img src={Eggroll} className="w-[1057px] h-auto"></img>
                        <img src={ButterNun} className="w-[1057px] h-auto"></img>
                    </div>
                </div>
                <footer>
                    <div className=" p-[20px] footer-div">
                        <h1 className="text-center text-[34px] font-bold">#Hashtag</h1>
                        <p className=" fooot text-center text-[24px]">Make Something Awesome</p>
                    </div>
                </footer>
            </div>

        </section>
    )
}

export default LoginProfile;