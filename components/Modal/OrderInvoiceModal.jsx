'use client'
import { setHideInvoiceModal } from '@/redux/features/ShowModalSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function OrderInvoiceModal() {

    const showModal=useSelector((store)=>store.showModal)
    const {isOpenOrderInvoiceModal}=showModal
    const dispatch=useDispatch()
    const handleClose=()=>{
      dispatch(setHideInvoiceModal())
    }
    if(!isOpenOrderInvoiceModal)return null;

  return (
    <div>
      <div className='flex inset-0 justify-center items-center fixed z-[3000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose}>
        <div className='w-[25rem] max-w-[90vw] bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation2]' onClick={(e)=>e.stopPropagation()}>
            <div className='relative w-full h-14 pl-14 box-border flex justify-between items-center'>
                <button onClick={handleClose} className='w-14 h-14 flex justify-center items-center'>
                    <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}  alt="close" />
                </button>
                <p className='font-iransans font-bold text-carbon-main text-sm inline-block'></p>
                <div></div>
            </div>
            <div className='rounded-lg flex flex-col'>
                <span className='my-1 mx-4 font-iransans font-bold text-2xl inline-block text-carbon-main '>فاکتور سفارش</span>
                <p className='mx-[1.125rem] mb-4 text-carbon-light font-iransans text-sm inline-block'>فست فود (تهرانپارس فلکه سوم)</p>
                <div>
                    <div className='h-12 box-border px-4 border-b-border-xs border-b-carbon-alphaLight flex justify-between items-center'>
                        <span className='text-carbon-main font-iransans text-sm inline-block'>پیتزا گوشت و قارچ</span>
                        <div className='flex flex-row-reverse items-center'>
                            <div className='mr-0.5 flex flex-col'>
                                <div className='mr-0.5 flex items-center'>
                                    <div className='mr-0.5 flex flex-col items-start'>
                                        <span className='mr-0.5 text-carbon-main font-bold font-iransans text-sm inline-block'> ۳۵۴,۰۰۰
                                            <span className='mr-0.5 text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Image width={6} height={6} src={"/icons/modal/exit-modal.svg"} alt='exit' className='mr-0.5'/>
                            <span className='mr-0.5 text-carbon-light font-iransans text-sm inline-block'>۱</span>
                        </div>    
                    </div>
                </div>
                <div>
                    <div className='h-12 box-border px-4 border-b-border-xs border-b-carbon-alphaLight flex justify-between items-center'>
                        <span className='text-carbon-main font-iransans text-sm inline-block'>استرامبولی گوشت و پنیر</span>
                        <div className='flex flex-row-reverse items-center'>
                            <div className='mr-0.5 flex flex-col'>
                                <div className='mr-0.5 flex items-center'>
                                    <div className='mr-0.5 flex flex-col items-start'>
                                        <span className='mr-0.5 text-carbon-main font-bold font-iransans text-sm inline-block'> ۲۳۲,۰۰۰
                                            <span className='mr-0.5 text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Image width={6} height={6} src={"/icons/modal/exit-modal.svg"} alt='exit' className='mr-0.5'/>
                            <span className='mr-0.5 text-carbon-light font-iransans text-sm inline-block'>۱</span>
                        </div>    
                    </div>
                </div>
                <div className='h-8 px-4 flex justify-between items-center'>
                    <span className='text-carbon-main font-iransans text-sm inline-block'>جمع کل</span>
                    <div className=' flex flex-col'>
                        <div className=' flex items-center'>
                            <div className=' flex flex-col items-start'>
                                <span className=' text-carbon-main font-iransans text-sm inline-block'>  ۵۸۶,۰۰۰
                                    <span className='mr-0.5 text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-8 px-4 flex justify-between items-center'>
                    <span className='text-carbon-main font-iransans text-sm inline-block'>هزینه ارسال</span>
                    <div className=' flex flex-col'>
                        <div className=' flex items-center'>
                            <div className=' flex flex-col items-start'>
                                <span className=' text-carbon-main font-iransans text-sm inline-block'> رایگان
                                    <span className='mr-0.5 text-carbon-light font-iransans text-xs inline-block'></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-8 px-4 flex justify-between items-center'>
                    <span className='text-accent-main font-iransans text-sm inline-block'>تخفیف</span>
                    <div className=' flex flex-col'>
                        <div className=' flex items-center'>
                            <div className=' flex flex-col items-start'>
                                <span className='text-accent-main font-iransans text-sm inline-block'>  ۷۴,۰۰۰
                                    <span className='mr-0.5 text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-8 px-4 py-2 border-t-border-xs border-t-carbon-alphaLight flex justify-between items-center'>
                    <span className='text-carbon-main font-iransans font-bold text-sm inline-block'>مجموع</span>
                    <div className=' flex flex-col'>
                        <div className=' flex items-center'>
                            <div className=' flex flex-col items-start'>
                                <span className='text-carbon-main font-iransans font-bold text-sm inline-block'>  ۵۱۲,۰۰۰
                                    <span className='mr-0.5 text-carbon-main font-iransans text-xs inline-block'>تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-3'>
                    <div className='box-border mt-3 p-3 rounded-lg shadow-shadows-small flex justify-between items-center border-border-xs border-surface-dark'>
                        <div className='flex items-baseline'>
                            <p className='ml-1 text-carbon-main font-iransans font-bold text-base inline-block'>۱۰۰</p>
                            <p className=' text-carbon-main font-iransans text-xs inline-block'>امتیاز دریافت کرده‌اید</p>
                        </div>
                        <img src="/icons/modal/club-badge.svg" alt="" className='mr-1'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>  
  )
}

export default OrderInvoiceModal