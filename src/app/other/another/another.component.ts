import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
       
        stringInterpolation = "This is my String interpolation";
}
