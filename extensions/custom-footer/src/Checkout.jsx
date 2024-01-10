import {
  reactExtension,
  InlineLayout,
  InlineStack,
  Link,
  Icon,
  Text,
  useShop,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const { storefrontUrl } = useShop();

  return (
    <InlineLayout columns={['auto','fill']}>
      <InlineStack spacing="extraTight" blockAlignment="center">
        <Link to={storefrontUrl}>Home</Link>
        <Icon source="chevronRight" size="extraSmall" />
        <Link to={`${storefrontUrl}collections`}>Shop</Link>
        <Icon source="chevronRight" size="extraSmall" />
        <Text appearance="subdued">Checkout</Text>
      </InlineStack>

      <InlineStack spacing="tight" inlineAlignment='end'>
        <Link to={`${storefrontUrl}sizing`}>Sizing</Link>
        <Link to={`${storefrontUrl}terms`}>Terms</Link>
        <Link to={`${storefrontUrl}privacy`}>Privacy</Link>
        <Link to={`${storefrontUrl}faq`}>FAQ</Link>
        <Link to={`${storefrontUrl}accessibility`}>Accessibility</Link>
      </InlineStack>
    </InlineLayout>
  );
}
