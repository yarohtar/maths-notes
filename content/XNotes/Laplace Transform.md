Let $f(t)$ be defined for all $t\geq 0$. Its Laplace transform is:
$$F(s)=\mathcal L\{f(t)\}(s)=\int_0^\infty f(t)e^{-st}dt$$
where $s\in\mathbb C$, provided that integral exists.

If additionally $f(t)=0$ for $t<0$, then $F(s)=-\tilde f(-is)$ ([[XNotes/Fourier Transform]])

### Examples
- $f(t)=1$, $F(s)=\frac 1 s$
- $f(t)=t$, $F(s)=\frac 1{s^2}$
- $f(t)=e^{\lambda t}$, $F(s)=\frac 1 {s-\lambda}$
- $f(t)=\sin t$, $F(s)=\frac 1 {s^2+1}$

### Properties
- Linearity
- Translation $\mathcal L\{f(t-t_0)H(t-t_0)\}(s)=e^{-st_0}F(s)$
- Scaling $\mathcal L\{f(\lambda t)\}(s)=\frac 1 \lambda F\left(\frac s\lambda\right)$
- Shifting $\mathcal L\{e^{s_0t}f(t)\}(s)=F(s-s_0)$
- Transform of derivatives $\mathcal L\{f'(t)\}(s)=sF(s)-f(0)$
- Derivative of transform $F'(s)=\mathcal L\{-tf(t)\}(s)$
- Asymptotic limits: if $\lim_{t\to\infty}f(t)$ exists:
	- $\lim_{s\to\infty}sF(s)=f(0)$
	- $\lim_{s\to 0}sF(s)=f(\infty)$
- Convolution: $\mathcal L\{f*g\}(s)=F(s)G(s)$, where $f*g$ is [[XNotes/Convolution]] of these functions.

### Inverse 
We can invert the Laplace transform using the Bromwich inversion formula:
$$f(t)=\frac 1 {2i\pi} \int_{\alpha-i\infty}^{\alpha+i\infty}F(s)e^{st}ds$$
where $\alpha\in\mathbb R$ is chosen to be greater than the real part of all singular points of $F(s)$.

A more handy formula is:
If $F(s)$ has only finitely many isolated singularities and $\lim_{|s|\to 0}F(s)=0$ then for $t<0$, $f(t)=0$, while for $t>0$:
$$f(t)=\sum_{k=1}^n\mathop{\mathrm{Re}s}_{s=s_k}(F(s)e^{st})$$
### Differential equations
We can apply Laplace transform to differential equations to solve them:
$$t\ddot f-t\dot f+f=2$$
$f(0)=2$
$\dot f(0)=-1$

Applying Laplace transform:
$$-s^2F'(s)-2sF(s)+f(0)+sF'(s)+F(s)+F(s)=\frac 2 s$$
Now apply boundary conditions and solve this for $F$. Then invert to find $f$.