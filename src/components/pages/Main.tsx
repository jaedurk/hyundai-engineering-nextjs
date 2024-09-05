import MainBanner from "../hyundai/MainBanner";
import Link from "next/link";
import FigureImage from "../reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Image from "next/image";
import {About14, About15} from "../blocks/about";
import ListColumn from "../reuseable/ListColumn";
import {aboutList1} from "../../data/about";

export default function Main() {
    return (
        <main className="content-wrapper">
            <MainBanner/>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <h1 className="display-1 mb-3 text-center">포트폴리오</h1>
                    <p className="lead text-center mb-10">현대엔지니어링의 최신 포트폴리오를 만나보세요</p>

                    <article className="item post col-md-4">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                        <NextLink title="타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다." className="link-dark" href="#"/>
                                    </h2>
                                </div>

                                <div className="post-content overflow-hidden dots-main-post-detail">
                                    <p className="mb-0">설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="item post col-md-4">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                        <NextLink title="타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다." className="link-dark" href="#"/>
                                    </h2>
                                </div>

                                <div className="post-content overflow-hidden dots-main-post-detail">
                                    <p className="mb-0">설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="item post col-md-4">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                        <NextLink title="타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다." className="link-dark" href="#"/>
                                    </h2>
                                </div>

                                <div className="post-content overflow-hidden dots-main-post-detail">
                                    <p className="mb-0">설명이 들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div className="bg-pale-ash">
                <div className="container pb-17 pt-15">
                    <div className="row">
                        <h1 className="display-1 mb-3 text-center">사업분야</h1>
                        <p className="lead text-center mb-10">다양한 사업을 영위하는 종합건설사입니다</p>

                        <article className="col-md-4">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">신축</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-4">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">증 · 개축</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-4">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">공장 리모델링</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-6">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">공장방수</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-6">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">공장보수</h2>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <h1 className="display-1 mb-3 text-center">소식지</h1>
                    <p className="lead text-center mb-5">현대엔지니어링의 최신 소식을 확인하세요</p>
                    <hr className="my-10 p-0"/>
                    <div className="row gx-lg-8 gx-xl-12 align-items-center">
                        <div className="col-lg-4">
                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-6 mb-4">제목</h3>
                            <p className="mb-5">
                                <i className="uil uil-calendar-alt"></i> 2024. 06. 26
                            </p>
                            <p className="mb-5 dots-main-post-detail overflow-hidden">
                                OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.
                            </p>
                            <NextLink title="소식 보러가기" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                    <hr className="my-10 p-0"/>
                    <div className="row gx-lg-8 gx-xl-12 align-items-center">
                        <div className="col-lg-4">
                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-6 mb-4">제목</h3>
                            <p className="mb-5">
                                <i className="uil uil-calendar-alt"></i> 2024. 06. 26
                            </p>
                            <p className="mb-5 dots-main-post-detail overflow-hidden">
                                OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.
                            </p>
                            <NextLink title="소식 보러가기" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                    <hr className="my-10 p-0"/>
                    <div className="row gx-lg-8 gx-xl-12 align-items-center">
                        <div className="col-lg-4">
                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-6 mb-4">제목</h3>
                            <p className="mb-5">
                                <i className="uil uil-calendar-alt"></i> 2024. 06. 26
                            </p>
                            <p className="mb-5 dots-main-post-detail overflow-hidden">
                                OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.
                            </p>
                            <NextLink title="소식 보러가기" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                    <hr className="my-10 p-0"/>
                </div>
            </div>
        </main>
    );
}
