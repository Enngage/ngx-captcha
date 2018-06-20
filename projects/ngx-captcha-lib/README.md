[![npm version](https://badge.fury.io/js/ngx-masonry-gallery.svg)](https://badge.fury.io/js/ngx-masonry-gallery)
[![Build Status](https://api.travis-ci.org/Enngage/ngx-masonry-gallery.svg?branch=master)](https://travis-ci.org/Enngage/ngx-masonry-gallery)
[![NPM](https://nodei.co/npm/ngx-masonry-gallery.png?mini=true)](https://nodei.co/npm/ngx-masonry-gallery/)

# Masonry gallery for Angular

For documentation & live demo visit [https://enngage.github.io/ngx-masonry-gallery/](https://enngage.github.io/ngx-masonry-gallery/)

Supported version: `Angular 6+`

This gallery is based on the awesome [https://masonry.desandro.com/methods.html#remove](https://masonry.desandro.com/methods.html#remove) which is very well maintained and fully tested. This implementation handles images load event to ensure nice transition and also allows you to easily add/remove images as you can see from demo.

I have limited time to maintain all my libraries so depending on how much traction this will gain, I will keep adding new features. To show support, please do start this repository.

## Quick start

```
npm install ngx-masonry-gallery --save
```

```
import { NgModule } from '@angular/core';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MasonryGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```
<ngx-masonry-gallery [width]="250" [images]="images"></ngx-masonry-gallery>
```

```
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

export class AppComponent {

    private urls: string[] = [
        'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg',
        'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg',
        'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg',
        'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg',
        'http://littleguyintheeye.com/wp-content/uploads/2014/08/nature-3.jpg',
    ];

    public get images(): IMasonryGalleryImage[] {
        return this.urls.map(m => <IMasonryGalleryImage>{
            imageUrl: m
    });
  }
}
```

