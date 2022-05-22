import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <span class="footer-title">About</span>
                <a class="link link-hover">About American Express</a>
                <a class="link link-hover">Investor Relations</a>
                <a class="link link-hover">Careers</a>
                <a class="link link-hover">Site Map</a>
                <a class="link link-hover">Contact Us</a>
            </div>
            <div>
                <span class="footer-title">Products & Services</span>
                <a class="link link-hover">Credit Cards</a>
                <a class="link link-hover">Business Credit Cards</a>
                <a class="link link-hover">Corporate Programs</a>
                <a class="link link-hover">Prepaid Cards</a>
                <a class="link link-hover">Savings Accounts & CDs</a>
            </div>
            <div>
                <span class="footer-title">Links You May Like</span>
                <a class="link link-hover">Membership Rewards</a>
                <a class="link link-hover">Free Credit Score & Report</a>
                <a class="link link-hover">CreditSecure®</a>
                <a class="link link-hover">Bluebird</a>
                <a class="link link-hover">Accept Amex Cards</a>
            </div>
            <div>
                <span class="footer-title">Newsletter</span>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;