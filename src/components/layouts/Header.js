import React from "react";
import Link from "next/link";
import {
    MdOutlineAccountCircle,
    MdOutlineFavoriteBorder,
    MdOutlineShoppingBag,
    MdSearch
} from "react-icons/md";
const Header = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark m-0 p-0">
                <div className="container-fluid justify-content-end p-1">
                    <Link href="/deneme">
                        <a><span className="headerTopNav">Siparişlerim</span></a>
                    </Link>
                    <Link href="/">
                        <a><span className="headerTopNav">Kampanyalar</span></a>
                    </Link>
                    <Link href="/">
                        <a><span className="headerTopNav">İndirim Kuponlarım</span></a>
                    </Link>
                    <Link href="/">
                        <a><span className="headerTopNav">Çözüm Merkezi</span></a>
                    </Link>
                    <Link href="/">
                        <a><span className="headerTopNav">MeKaShopta Satıcı Ol</span></a>
                    </Link>
                </div>
            </nav>

            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border">
                <div className="container">
                    <div className="col-2">
                        <Link href="/">
                            <a className="navbar-brand main-logo">Shop App</a>
                        </Link>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input
                                /*  style= {{border: "1px solid red"}} */
                                type="search"
                                className="form-control headerSearchInput"
                                placeholder="Ürün, Kategori veya Mağaza arayın..."
                            />
                            <span className="headerSearchInputText fw-bold"><MdSearch size="22" /></span>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <MdOutlineAccountCircle size="23" className="icon" /> <span className="HeaderBasliklar">Hesabım</span>
                        <MdOutlineFavoriteBorder size="23" className="icon" /> <span className="HeaderBasliklar">Favorilerim</span>
                        <MdOutlineShoppingBag size="23" className="icon" /> <span className="HeaderBasliklar">Sepetim</span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
