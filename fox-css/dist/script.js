// made by Gambhir Sharma
/*
Made on 19 May 2022
*/

// SCSS code

/*
$p-col: #f08b14;
$s-col: #e65100;

$bw: 2px solid #202020;

@mixin flexCenter() {
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  @include flexCenter();
  flex-direction: column;
}
.canvas {
  position: relative;
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  transform: translate(0px, -25px);
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 450px;
    width: 450px;
    border: $bw;
    transform: translate(0px, -25px);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
.head {
  position: absolute;
  $h: 160px;
  $w: 160px;
  z-index: 2;
  transform: translate(-15px, 15px);
  &-main {
    position: absolute;
    top: 15px;
    height: $h;
    width: $w;
    clip-path: polygon(50% 0, 90% 24%, 100% 42%, 51% 100%, 0 44%, 10% 24%);
    background: $p-col;
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: $h;
      width: $w;
      background: $s-col;
      clip-path: polygon(100% 0, 50% 100%, 100% 100%);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: $h;
      width: $w;
      background: $s-col;
      clip-path: polygon(0 0, 0% 100%, 51% 100%);
    }
  }
  .ears {
    position: absolute;
    height: 50px;
    width: $w;
    &::before {
      content: "";
      display: flex;
      position: absolute;
      height: 60px;
      width: 60px;
      background: $s-col;
      clip-path: polygon(85% 0, 0 50%, 50% 100%);
      // transform: rotate(35deg);
      right: 0;
    }
    &::after {
      content: "";
      display: flex;
      position: absolute;
      height: 60px;
      width: 60px;
      background: $s-col;
      clip-path: polygon(15% 0, 50% 100%, 100% 50%);
      // transform: rotate(-35deg);
    }
  }
}
.body {
  position: absolute;
  bottom: 0px;
  &-main {
    height: 250px;
    width: 250px;
    background: $p-col;
    clip-path: polygon(52% 0%, 98% 0%, 78% 100%, 22% 100%);
    .legs {
      position: absolute;
      bottom: 0;
      right: -25px;
      height: 200px;
      width: 200px;
      clip-path: polygon(50% 24%, 80% 0, 60% 100%, 40% 100%, 20% 0);
      background: $s-col;
      @include flexCenter;
      &::after {
        content: "";
        height: 200px;
        width: 2px;
        background: $p-col;
      }
    }
  }
}
.tail {
  position: absolute;
  bottom: 0;
  left: 31px;
  &-main {
    clip-path: polygon(0 0, 50% 0, 100% 100%, 0 50%);
    background: $p-col;
    height: 100px;
    width: 100px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 50px;
      width: 50px;
      background: $s-col;
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }
  }
}
section {
  transform: translate(0px, 25px);
  font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
  font-family: arial;
  font-weight: 800;
  font-size: 3.5em;

  font-style: normal;
  i {
    text-transform: uppercase;
    position: relative;
    color: $p-col;
    text-shadow: 0 3px $s-col, 0 5px $s-col, 0 7px $s-col;
  }
}

*/