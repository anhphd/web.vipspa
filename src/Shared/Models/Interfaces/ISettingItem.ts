export interface ISettingItem {
    id: string;
    name: string;
    version: string;
    copyright: string,
    facebook_page_name: string,
    facebook_page_url: string,
    zalo_number: string,
    hotline1 : string,
    hotline2 : string,
    messenger_url: string,
    email_support: string,
    googlemaps_location: string,
    banners: Array<{ name: string, url: string }>;
}