define([
    'components/slider',
    //'components/utils',
    'es6!components/next',
    'components/dom'
], function(Slider, Next) {
    window.Slider = Slider;
    window.Next = Next;

    Next.hello();
});