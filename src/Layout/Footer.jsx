import React from "react";
import { Link } from "react-router-dom";
//css
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="top-footer">
          <div className="content-left">
            <h3>গ্রাহক সেবা</h3>
            <Link to="/">সাহায্য কেন্দ্র</Link>
            <Link to="/">কিভাবে কেনাকাটা করবেন</Link>
            <Link to="/">পণ্য রিটার্ণ ও টাকা রিফান্ড</Link>
            <Link to="/">আমাদের সাথে যোগাযোগ করুন</Link>
            <Link to="/">নিয়ম ও শর্তাবলী</Link>
            <Link to="/">সেন্ট্রাল কমপ্লেইন ম্যানেজমেন্ট সিস্টেম</Link>
            <Link to="/">দারাজের সাথে আয় করুন</Link>
            <Link to="/">সেলার বিশ্ববিদ্যালয়</Link>
            <Link to="/">দারাজে বিক্রয় করুন</Link>
            <Link to="/">আচরণ বিধি</Link>
            <Link to="/">দারাজ অ্যাফিলিয়েট প্রোগ্রাম জয়েন করুন</Link>
          </div>
          <div className="content-center">
            <h3>দারাজ</h3>
            <Link to="/">দারাজ সম্পর্কে</Link>
            <Link to="/">ডিজিটাল পেমেন্টস</Link>
            <Link to="/">দারাজ ব্লগ</Link>
            <Link to="/">আমাদের সাথে যোগাযোগ করুন</Link>
            <Link to="/">দারাজ কেয়ার</Link>
            <Link to="/">দারাজ মার্ট</Link>
            <Link to="/">সুরক্ষা নীতিমালা</Link>
            <Link to="/">দারাজ অ্যাপ</Link>
            <Link to="/">দারাজ এক্সক্লুসিভ</Link>
            <Link to="/">হাংরি নাকি</Link>
            <Link to="/">দারাজ ডোনেট</Link>
            <Link to="/">Daraz BPL Live</Link>
          </div>

          <div className="content-right">
            <div className="scan-image">
            <img src="scan.png" alt="" />
            </div>

            <div className="happy-shopping-image">
            <img src="happy-shopping.png" alt="" /><br />
           {/** <a>হ্যাপি শপিং</a><br />
            <a>অ্যাপ ডাউনলোড করুন</a>*/} 
            </div>

            <div className="footer-buttons">
               <button className="app-store"> App Store</button>
               <button className="google-play"> Google-play</button>
               <button className="app-gallery"> App-Gallery</button>
            </div>

          </div>


        </div>

        <div className="botttom-footer"></div>
      </section>
    </>
  );
};

export default Footer;
