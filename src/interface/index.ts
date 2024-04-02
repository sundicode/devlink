export interface LinkInterface {}
type Tplateform = { icon: string; colorCode: string; name: string };
export interface UserLinkInterface {
  id: number;
  link: string;
  platform: Tplateform;
}
