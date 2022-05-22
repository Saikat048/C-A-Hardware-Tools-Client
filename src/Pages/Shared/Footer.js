import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">About</span>
                <a className="link link-hover">About American Express</a>
                <a className="link link-hover">Investor Relations</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Site Map</a>
                <a className="link link-hover">Contact Us</a>
            </div>
            <div>
                <span className="footer-title">Products & Services</span>
                <a className="link link-hover">Credit Cards</a>
                <a className="link link-hover">Business Credit Cards</a>
                <a className="link link-hover">Corporate Programs</a>
                <a className="link link-hover">Prepaid Cards</a>
                <a className="link link-hover">Savings Accounts & CDs</a>
            </div>
            <div>
                <span className="footer-title">Links You May Like</span>
                <a className="link link-hover">Membership Rewards</a>
                <a className="link link-hover">Free Credit Score & Report</a>
                <a className="link link-hover">CreditSecure®</a>
                <a className="link link-hover">Bluebird</a>
                <a className="link link-hover">Accept Amex Cards</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;