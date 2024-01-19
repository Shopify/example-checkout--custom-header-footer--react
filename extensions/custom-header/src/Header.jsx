import {
  reactExtension,
  InlineLayout,
  Image,
} from '@shopify/ui-extensions-react/checkout';

export const checkoutHeader = reactExtension(
  'purchase.checkout.header.render-after',
  () => <Extension />,
);

export const thankYouHeader = reactExtension(
  'purchase.thank-you.header.render-after',
  () => <Extension />,
);

const images = [
  "https://cdn.shopify.com/files/watering-can-white-300.png",
  "https://cdn.shopify.com/files/snake-300.png",
  "https://cdn.shopify.com/files/office.png",
  "https://cdn.shopify.com/files/monstera-300.png",
  "https://cdn.shopify.com/files/fiddle-fig-300.png",
  "https://cdn.shopify.com/files/cat-palm-300.png",
  "https://cdn.shopify.com/files/bedroom.png",
  "https://cdn.shopify.com/files/watering-can-black-300.png",
];

function Extension() {
  return (
      <InlineLayout
        columns="1fr"
        spacing="loose"
      >
        {images.map((source, index) => (
          <Image key={index} source={source} />
        ))}
      </InlineLayout>
  );
}
