## Functions
Let $f\in L_{2}$ ([[Analysis/L norms]]). We define its Fourier Transform as:
$$
\hat{f}(\theta)=\int_{-\infty}^\infty e^{-i\theta x}f(x)dx
$$

## Sequences
For any $v\in l_{2}$ ([[Analysis/L norms]]). We define its Fourier Transform as:
$$
\hat{v}(\theta)=\sum_{m=-\infty}^{\infty} e^{-im\theta}v_{m}
$$
[[Analysis/Hilbert Space/Parseval's Identity]] holds:
$$
\lVert \hat{v} \rVert^2= \frac{1}{2\pi} \int _{-\pi}^\pi \lvert  \hat{v}(\theta) \rvert ^2 \, d\theta = \sum_{m=-\infty}^{\infty} \lvert v_{m} \rvert ^2 =\lVert v \rVert^2 
$$
Note that the inverse in this case is just the [[Analysis/Fourier Series]]
