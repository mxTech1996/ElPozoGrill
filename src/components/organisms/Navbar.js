'use client';
import { useRouter } from 'next/navigation';
import { navData } from '@/data';
import { NavbarV2, theme } from 'ecommerce-mxtech';
import { useInformation } from '@/store/useInformation';

const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: 'link-v2',
        align: 'left',
      }}
      textColor='black'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-36',
      }}
      styleTitle={{
        fontWeight: 'bold',
        fontSize: 16,
      }}
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push('/my-cart'),
      }}
      buttonContactProps={{
        onClick: () => router.push('/more-information'),
      }}
      withSearch={false}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => {}}
      stylesContentLink={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6C799',
      }}
    />
  );
};

export default Navbar;
