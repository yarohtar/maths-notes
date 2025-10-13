[[Quantum/Dirac Notation]] frees up from having to pick a basis

Suppose we have momentum states $P\ket{p}=p\ket{p}$ where $p\in \mathbb{R}$
Then 
$$
\ket{\psi} = \int \tilde{\psi}(p)\ket{p} dp = \int \psi(x)\ket{x} dx
$$
where $\tilde{\psi}(p)$ is the wave function in the $\ket{p}$ continuum basis

We'll show later that $\braket{ x | p }={e^{ipx/\hbar}} \frac{1}{\sqrt{2\pi \hbar }}=\braket{ p | x }$

Therefore by projecting:
$$
\begin{align}
\psi(x)&=\braket{ x | \psi } =\int \tilde{\psi}(p)\braket{ x | p } dp \\
\psi(x) & =\frac{1}{\sqrt{ 2\pi \hbar }}\int \tilde{\psi}(p)e^{ipx/\hbar}dp
\end{align}
$$
So the momentum is the [[Analysis/Fourier Transform]] of the position.