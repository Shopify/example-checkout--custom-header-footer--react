import {
  reactExtension,
  InlineLayout,
  Image,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.header.render-after',
  () => <Extension />,
);

function Extension() {
  return (
      <InlineLayout
        columns={[
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "1fr",
        ]}
        spacing="tight"
      >
        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />

        <Image
          source={
            "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
          }
        />
      </InlineLayout>
  );
}
