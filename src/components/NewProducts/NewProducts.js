import React from "react";
import classes from "../NewProducts/NewProducts.module.scss";
import dress_model from "../../assets/image/dress_model.svg";
import favourite from "../../assets/image/favourite.png";
// import ColorSelection from "../ColorSelection/ColorSelection";
import new_logo from "../../assets/image/new.svg";

const NewProducts = () => {
    return (
        <div className={classes.main_cart__container}>
            <div className={classes.main_cart_wrap}>
                <img src={dress_model} alt="blue-dress" />
                <div className={classes.main_cart_wrap__icons}>
                    <div className={classes.new_icon}>
                        <img src={new_logo} alt="new-product_icon" />
                    </div>
                    <div className={classes.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                </div>
                <div className={classes.cart_wrapper_main}>
                    <div className={classes.cart_wrapper}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.624 13.3558L13.8334 5.67848C13.8008 5.36013 13.5326 5.11816 13.2126 5.11816H2.80945C2.49029 5.11816 2.22229 5.35932 2.18879 5.67682L1.37691 13.3579C1.30991 14.0282 1.53338 14.7019 1.98985 15.2065C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2215C14.4693 14.7207 14.6913 14.0415 14.624 13.3558ZM13.0904 14.3832C12.8749 14.6208 12.5784 14.7517 12.2557 14.7517H3.76673C3.4461 14.7517 3.13588 14.612 2.91554 14.3686C2.6952 14.1252 2.58723 13.8021 2.61885 13.4856L3.3712 6.36676H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3832Z"
                                fill="#7C7C7C"
                            />
                            <path
                                d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
                                fill="#7C7C7C"
                            />
                        </svg>
                        <span>???????????????? ?? ??????????????</span>
                    </div>
                </div>

                <div className={classes.price_box}>
                    <span className={classes.prevPrice}>12000 c.</span>
                    <span className={classes.currentPrice}>12000 c.</span>
                    <span className={classes.discount}>35%</span>
                </div>
                <div className={classes.product_description}>
                    <div className={classes.description_text}>
                        <span>The Organic Cotton Clothes</span>
                    </div>

                    <div className={classes.size_description}>
                        <span>???????????? 46-54</span>
                    </div>
                </div>
                <div className={classes.color_wrapper}>
                    {/* <ColorSelection /> */}
                </div>
            </div>
            {/* <div className={classes.main_cart_wrap}>
                <img src={dress_model} alt="blue-dress" />
                <div className={classes.main_cart_wrap__icons}>
                    <div className={classes.new_icon}>
                        <img src={new_logo} alt="new-product_icon" />
                    </div>
                    <div className={classes.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                </div>
                <div className={classes.cart_wrapper_main}>
                    <div className={classes.cart_wrapper}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.624 13.3558L13.8334 5.67848C13.8008 5.36013 13.5326 5.11816 13.2126 5.11816H2.80945C2.49029 5.11816 2.22229 5.35932 2.18879 5.67682L1.37691 13.3579C1.30991 14.0282 1.53338 14.7019 1.98985 15.2065C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2215C14.4693 14.7207 14.6913 14.0415 14.624 13.3558ZM13.0904 14.3832C12.8749 14.6208 12.5784 14.7517 12.2557 14.7517H3.76673C3.4461 14.7517 3.13588 14.612 2.91554 14.3686C2.6952 14.1252 2.58723 13.8021 2.61885 13.4856L3.3712 6.36676H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3832Z"
                                fill="#7C7C7C"
                            />
                            <path
                                d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
                                fill="#7C7C7C"
                            />
                        </svg>
                        <span>???????????????? ?? ??????????????</span>
                    </div>
                </div>

                <div className={classes.price_box}>
                    <span className={classes.prevPrice}>12000 c.</span>
                    <span className={classes.currentPrice}>12000 c.</span>
                    <span className={classes.discount}>35%</span>
                </div>
                <div className={classes.product_description}>
                    <div className={classes.description_text}>
                        <span>The Organic Cotton Clothes</span>
                    </div>

                    <div className={classes.size_description}>
                        <span>???????????? 46-54</span>
                    </div>
                </div>
                <ColorSelection />
            </div>
            <div className={classes.main_cart_wrap}>
                <img src={dress_model} alt="blue-dress" />
                <div className={classes.main_cart_wrap__icons}>
                    <div className={classes.new_icon}>
                        <img src={new_logo} alt="new-product_icon" />
                    </div>
                    <div className={classes.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                </div>
                <div className={classes.cart_wrapper_main}>
                    <div className={classes.cart_wrapper}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.624 13.3558L13.8334 5.67848C13.8008 5.36013 13.5326 5.11816 13.2126 5.11816H2.80945C2.49029 5.11816 2.22229 5.35932 2.18879 5.67682L1.37691 13.3579C1.30991 14.0282 1.53338 14.7019 1.98985 15.2065C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2215C14.4693 14.7207 14.6913 14.0415 14.624 13.3558ZM13.0904 14.3832C12.8749 14.6208 12.5784 14.7517 12.2557 14.7517H3.76673C3.4461 14.7517 3.13588 14.612 2.91554 14.3686C2.6952 14.1252 2.58723 13.8021 2.61885 13.4856L3.3712 6.36676H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3832Z"
                                fill="#7C7C7C"
                            />
                            <path
                                d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
                                fill="#7C7C7C"
                            />
                        </svg>
                        <span>???????????????? ?? ??????????????</span>
                    </div>
                </div>

                <div className={classes.price_box}>
                    <span className={classes.prevPrice}>12000 c.</span>
                    <span className={classes.currentPrice}>12000 c.</span>
                    <span className={classes.discount}>35%</span>
                </div>
                <div className={classes.product_description}>
                    <div className={classes.description_text}>
                        <span>The Organic Cotton Clothes</span>
                    </div>

                    <div className={classes.size_description}>
                        <span>???????????? 46-54</span>
                    </div>
                </div>
                <ColorSelection />
            </div>
            <div className={classes.main_cart_wrap}>
                <img src={dress_model} alt="blue-dress" />
                <div className={classes.main_cart_wrap__icons}>
                    <div className={classes.new_icon}>
                        <img src={new_logo} alt="new-product_icon" />
                    </div>
                    <div className={classes.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                </div>
                <div className={classes.cart_wrapper_main}>
                    <div className={classes.cart_wrapper}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.624 13.3558L13.8334 5.67848C13.8008 5.36013 13.5326 5.11816 13.2126 5.11816H2.80945C2.49029 5.11816 2.22229 5.35932 2.18879 5.67682L1.37691 13.3579C1.30991 14.0282 1.53338 14.7019 1.98985 15.2065C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2215C14.4693 14.7207 14.6913 14.0415 14.624 13.3558ZM13.0904 14.3832C12.8749 14.6208 12.5784 14.7517 12.2557 14.7517H3.76673C3.4461 14.7517 3.13588 14.612 2.91554 14.3686C2.6952 14.1252 2.58723 13.8021 2.61885 13.4856L3.3712 6.36676H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3832Z"
                                fill="#7C7C7C"
                            />
                            <path
                                d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
                                fill="#7C7C7C"
                            />
                        </svg>
                        <span>???????????????? ?? ??????????????</span>
                    </div>
                </div>

                <div className={classes.price_box}>
                    <span className={classes.prevPrice}>12000 c.</span>
                    <span className={classes.currentPrice}>12000 c.</span>
                    <span className={classes.discount}>35%</span>
                </div>
                <div className={classes.product_description}>
                    <div className={classes.description_text}>
                        <span>The Organic Cotton Clothes</span>
                    </div>

                    <div className={classes.size_description}>
                        <span>???????????? 46-54</span>
                    </div>
                </div>
                <ColorSelection />
            </div>
            <div className={classes.main_cart_wrap}>
                <img src={dress_model} alt="blue-dress" />
                <div className={classes.main_cart_wrap__icons}>
                    <div className={classes.new_icon}>
                        <img src={new_logo} alt="new-product_icon" />
                    </div>
                    <div className={classes.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                </div>
                <div className={classes.cart_wrapper_main}>
                    <div className={classes.cart_wrapper}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.624 13.3558L13.8334 5.67848C13.8008 5.36013 13.5326 5.11816 13.2126 5.11816H2.80945C2.49029 5.11816 2.22229 5.35932 2.18879 5.67682L1.37691 13.3579C1.30991 14.0282 1.53338 14.7019 1.98985 15.2065C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2215C14.4693 14.7207 14.6913 14.0415 14.624 13.3558ZM13.0904 14.3832C12.8749 14.6208 12.5784 14.7517 12.2557 14.7517H3.76673C3.4461 14.7517 3.13588 14.612 2.91554 14.3686C2.6952 14.1252 2.58723 13.8021 2.61885 13.4856L3.3712 6.36676H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3832Z"
                                fill="#7C7C7C"
                            />
                            <path
                                d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
                                fill="#7C7C7C"
                            />
                        </svg>
                        <span>???????????????? ?? ??????????????</span>
                    </div>
                </div>

                <div className={classes.price_box}>
                    <span className={classes.prevPrice}>12000 c.</span>
                    <span className={classes.currentPrice}>12000 c.</span>
                    <span className={classes.discount}>35%</span>
                </div>
                <div className={classes.product_description}>
                    <div className={classes.description_text}>
                        <span>The Organic Cotton Clothes</span>
                    </div>

                    <div className={classes.size_description}>
                        <span>???????????? 46-54</span>
                    </div>
                </div>
                <ColorSelection />
            </div> */}
        </div>
    );
};

export default NewProducts;
