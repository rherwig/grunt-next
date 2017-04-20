require([
    'components/slider',
    //'components/utils',
    'es6!components/next'
], function(Slider, Next) {
    window.Slider = Slider;
    window.Next = Next;

    Next.hello();
});