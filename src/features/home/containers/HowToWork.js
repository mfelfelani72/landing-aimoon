import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import StepBox from '../components/HowToWork/StepBox.jsx';

const HowToUse = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            {/* top section -> { top table and title } */}
            <div className='relative w-full h-[26.5rem] overflow-hidden -bottom-[19rem] -mt-[35rem] z-10'>
                {/* table top*/}

                {[...Array(13)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute mx-[calc(50%-50rem)]`}
                        style={{ left: `-${60 - i * 5}rem`, top: `${30 + i * 2.33}rem` }}
                    >
                        <div className='flex flex-col gap-[86px] w-full items-center'>
                            <div className="w-[1270px] h-[2px] origin-top-left -rotate-[25deg] opacity-5 bg-black border border-black" />
                        </div>
                    </div>
                ))}

                <div className={`absolute -left-[34rem] -top-[25rem] mx-[calc(50%-50rem)]`}>
                    <div className='flex flex-col gap-[86px] w-full items-center'>
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                    </div>
                </div>

                {/* title */}
                <div className='absolute top-[20rem] inset-x-0 w-full inline-flex items-center justify-center '>
                    <div className="text-center text-Neutral-500 text-3xl font-bold">
                        {t("how_to_work_aimoonhub")}
                    </div>
                </div>
            </div>

            {/* bottom section -> { content and bottom table } */}
            <div className='relative w-full h-[73rem] overflow-hidden -bottom-[19rem]'>

                {/* content */}

                <div className='absolute top-0  mx-[calc(50%-50rem)] width-theme'>

                    <div className='flex flex-row'>
                        <div className='basis-5/12 flex flex-col gap-[19rem] pr-[22rem]'>
                            <StepBox number={1} title={"جمع آوری لحظه ای خبر"} >
                                <div className="w-60 text-Neutral-500 text-base font-medium">بات به‌صورت خودکار از بیش لز 1000  منابع خبری معتبر داده‌ها رو دریافت می‌کنه.(مثلاً سایت‌های خبری کر یپتو، توییتر، ردیت و ...)</div>
                            </StepBox>
                            <StepBox number={3} title={"نمایش نتیجه در تلگرام"} >
                                <div className='flex flex-col'>
                                    <div className='w-60 text-Neutral-500 text-base'>بعد از پردازش، نتیجه تحلیل مستقیم توی تلگرام کاربر ارسال می‌شه:</div>
                                    <div className='w-60 text-Neutral-500 text-base'>✔️ خلاصه خبر + تحلیل احساسات</div>
                                    <div className='w-60 text-Neutral-500 text-base'>✔️ هشدارها (مثلاً نوسان شدید روی یه کوین خاص)</div>
                                    <div className='w-60 text-Neutral-500 text-base'>✔️ لینک منبع خبر برای مطالعه کام</div>
                                    <div className='w-60 text-Neutral-500 text-base'>✔️تحلیل خبر جفت ارزهای مهم در ساعات تعریف شده</div>
                                </div>
                            </StepBox>
                        </div>
                        <div className='w-[8rem] inline-flex justify-start'>
                            <div className='relative'>

                                <div className="absolute top- right-[7px] w-[2px] h-[800px] mt-[6rem] opacity-80 bg-gradient-to-b from-secondary-50 via-secondary-200 to-secondary-50 z-10"></div>
                                <div className="absolute top-0 inset-x-0 w-4 h-4 mt-[6rem] bg-secondary-500 rounded-full z-20" />
                                <div className="absolute top-0 inset-x-0 w-4 h-4 mt-[20rem] bg-secondary-200 rounded-full z-20" />
                                <div className="absolute top-0 inset-x-0 w-4 h-4 mt-[35rem] bg-secondary-200 rounded-full z-20" />
                                <div className="absolute top-0 inset-x-0 w-4 h-4 mt-[50rem] bg-secondary-200 rounded-full z-20" />
                            </div>
                        </div>
                        <div className='basis-5/12 flex flex-col mt-[15rem] gap-[262px]'>
                            <StepBox number={2} title={"پردازش و تحلیل با هوش مصنوعی"} >
                                <div className='w-60 text-Neutral-500 text-base'>
                                    با استفاده از مدل پیریخته زبانی و تحلیل احساس اخبار تحلیل می‌شود:
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ بررسی احساسات (مثبت، منفی، خنثی)
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ تشخیص اخبار فیک یا شایعه
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ تحلیل ارتباط خبر با کوین‌های مهم
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ ارائه تحلیل مود خبر
                                </div>
                            </StepBox>
                            <StepBox number={4} title={" داشبورد حرفه‌ای برای کاربران پیشرفته"} >
                                <div className='w-60 text-Neutral-500 text-base'>
                                    کاربران پلن‌های پولی، می‌تونن توی داشبورد وب جزئیات بیشتری ببینن:
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ نمودارهای تحلیل روند خبرها
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ مشاهده سوابق تحلیل‌ها
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ فیلترهای سفارشی برای دریافت اخبار خاص
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ ارائه داشبورد خبرگزاری
                                </div>
                                <div className='w-60 text-Neutral-500 text-base'>
                                    ✔️ ارائه داشبورد خبرنگار
                                </div>

                            </StepBox>
                        </div>
                    </div>
                </div>

                {/* bottom table */}

                <div className='absolute top-[27rem] right-0 mx-[calc(50%-50rem)]'>
                    <div className='flex flex-col gap-[86px]'>
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                    </div>
                </div>

                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute mx-[calc(50%-50rem)]`}
                        style={{ right: `${50 - i * 5}rem`, bottom: `${-15 + i * 2.33}rem` }}
                    >
                        <div className='flex flex-col gap-[86px] w-full items-center'>
                            <div className="w-[710px] h-[2px] origin-top-right rotate-[25deg] opacity-5 bg-black border border-black" />
                        </div>
                    </div>
                ))}

            </div>
        </>

    )
}

export default HowToUse
