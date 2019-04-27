import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.page.html',
  styleUrls: ['./dich-vu.page.scss'],
})
export class DichVuPage implements OnInit {
  _Services: Array<{ name: string; img: string; description: string }> = [
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." },
    { name: "Dịch vụ sửa chữa máy xông hơi chuyên nghiệp", img: "https://static.thenounproject.com/png/340719-200.png", description: "Hafuco cung cấp dịch vụ sửa chữa, bảo dưỡng máy xông hơi khô và ướt tại nhà uy tín, nhanh chóng và..." }
  ];
  constructor() { }

  ngOnInit() {
  }

}
