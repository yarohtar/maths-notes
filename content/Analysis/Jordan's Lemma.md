Let $f(z)$ be analytic in $\mathbb C$ except for a finite number of singular points, with $f(z)\to 0$ as $|z|\to\infty$. Let $\lambda, \mu\in \mathbb R$ with $\lambda>0$ and $\mu<0$. Then:
$$\lim_{R\to\infty}\int_{\gamma_R}f(z)e^{i\lambda z}dz =0$$
$$\lim_{R\to\infty}\int_{\overline\gamma_R}f(z)e^{i\mu z}dz =0$$
Where $\gamma_R$ is a half circle in the upper half plane i.e. $\gamma_R:[0,\pi]\to\mathbb C$ and $\gamma_R(\theta)=Re^{i\theta}$ while $\overline \gamma_R$ is a half circle in lower half plane i.e. $\overline\gamma_R(\theta)=Re^{-i\theta}$

### Proof
For $\lambda>0$ let $\gamma_R(\theta)=Re^{i\theta}$. Also note $\sin\theta \geq 2\theta/\pi$ on $[0,\pi/2]$. 
Hence write:
$$\begin{align}\left|\int_{\gamma_R}f(z)e^{i\lambda z}dz\right|&\leq R\sup_{z\in\gamma_R} |f(z)|\int_0^\pi e^{-\lambda R\sin\theta}d\theta\\&\leq 2R\sup|f(z)|\int_0^{\pi/2}e^{-\lambda R \ 2\theta/\pi}d\theta\\ &={\pi\over 2 \lambda }(1-e^{-\lambda R})\sup |f(z)|\to 0\end{align}$$
