function displayRandomImage() {
    const images = [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XtNQuYOcyh2TqQrwTdDgAwHaEK%26pid%3DApi&f=1&ipt=8e9470dfc5ec274fe6fe6d0391306c1d4c3a6eaf9209ae7c2d971ba5d4e1689b&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.o2b7tRrF8YHYlv4fYqpFHQHaG9%26pid%3DApi&f=1&ipt=251d8784ad80db14fe093ed66bc3aac3dd86a289dcb76e3bb44b46f74142b02a&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WrPyUx-ZwJcVHigA6juBrAHaGs%26pid%3DApi&f=1&ipt=cfb6b48b54b46b4cc38526f36e21822e83da78ce98bddcd4c15e53ac08ed707a&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xIMxluLeC55XBgo5DJc4ZQHaFN%26pid%3DApi&f=1&ipt=41dc9ab07f11cec994f6104ec8f3d49da9b2d038644aead336c2b235791c3bbf&ipo=images',
        'https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2013/10/Top-10-Images-of-Celebrity-Chef-Cats-Cooking-2.jpg?resize=600%2C432&ssl=1'
      ];
      
    
    const randomIndex = Math.floor(Math.random() * 5);
    const randomImage = images[randomIndex];
    
    const imgElem = document.getElementById("randomImage");
    imgElem.src = randomImage;
}