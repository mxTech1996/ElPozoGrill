'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  return (
    <main
      style={{
        backgroundColor: '#F2AE6A',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='background-video'
          src='/images/canvan.mp4'
          colorText='white'
          title={dataSite.subtitle}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withSubView
          images={[dataSite.image_hero, dataSite.image_hero2]}
          styleTextSecondSection={{
            color: 'black',
          }}
          withShadowText
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col' id='features'>
          <FeaturesV2
            features={dataSite.services.map((feature) => ({
              title: feature.title,
              description: feature.description,
              src: feature.image,
            }))}
            styleTitle={{
              color: primaryColor,
            }}
            styleDescription={{
              color: '#fff',
            }}
            onClickButton={() => {
              router.push('/more-information');
            }}
            gridColumns={3}
            backgroundColor={primaryColor}
            borderRadius={10}
            variant='text'
            textColorDescription={primaryColor}
            version='v1'
          />
        </div>

        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='All Products'
              gridColumns={4}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='3'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#FBFBFB'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions data={dataSite.info} gridColumns={1} variant='card' />
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#FFFFFF'
            references={dataSite.references}
            gridColumns={1}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
