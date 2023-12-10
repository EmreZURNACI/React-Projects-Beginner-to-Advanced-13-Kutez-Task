import React from 'react'
import { useParams } from 'react-router-dom'
import { useImageCon } from '../Contexts/ImagesContext'
import Navbar from './Navbar'
import { useThemeContext } from '../Contexts/ThemeContext'
function ProductPage() {
    const { theme } = useThemeContext()
    const { id } = useParams()
    const imgler = Object.values(useImageCon())
    const imgDizisi = imgler.filter((img) => {
        return id === String(img).split("/")[3].split(".")[0].split("_")[0].split("-")[0]
    })
    return (
        <div className={(theme === "Light" ? "bg-white" : "bg-black")}>
            <Navbar />
            <div className='container mx-auto flex flex-col'>
                <div className='productPage gap-4'>
                    {
                        imgDizisi[0].map((image, index) => (
                            <div key={index}>
                                <img src={image} alt="" className='rounded-xl' />
                            </div>
                        ))
                    }
                </div>
                <div className={`md:container-md my-4 ` + (theme === "Light" ? "text-black" : "text-white")} >
                    <p className='font-bold text-xl mb-1 font-avenir-book '>Lüksün ve Zarafetin Buluşma Noktası: Özel Tasarım Pırlanta Yüzüklerimiz!</p>
                    <p>Sevgilinizle veya sevdiklerinizle paylaşabileceğiniz unutulmaz anlar için özel tasarım pırlanta yüzüklerimizle tanışın. Altın seçeneklerimiz arasında şıklığı temsil eden White Gold, sıcaklığıyla göz kamaştıran Yellow Gold ve romantizmi yansıtan Rose Gold bulunmaktadır.</p>
                    <p>Her bir yüzüğümüz, ustaca işlenmiş ve dikkatle seçilmiş pırlantalarla öne çıkıyor. Round Cut, Princess Cut ve Emerald Cut gibi çeşitli pırlanta kesimleri arasından seçim yaparak, tarzınıza ve kişisel tercihlerinize uygun bir parça bulabilirsiniz.</p>
                    <p className='font-bold text-xl mb-1 font-avenir-book '>
                        Neden Biz?
                    </p>
                    <ul>
                        <li><span className='font-medium'>Kalite:</span> Pırlantalarımız en yüksek kalitede ve berraklıkta seçilir.</li>
                        <li><span className='font-medium'>Ustalık:</span> Her yüzük, uzman zanaatkârlarımız tarafından özenle işlenir.</li>
                        <li><span className='font-medium'>Çeşitlilik:</span> Yellow Gold, White Gold ve Rose Gold gibi çeşitli altın seçenekleriyle tarzınıza uygun bir yüzük bulun.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductPage