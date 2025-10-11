[[XNotes/Schrodinger Equation]] with $U(x)=\frac 1 2m\omega^2x^2$
TDSE:
$$i\hbar {\partial \psi \over \partial t} = -{\hbar\over 2m} {d^2\psi\over dx^2} +\frac 1 2 m\omega^2x^2\psi$$
TISE:
$$-{\hbar^2\over 2m}{d^2\psi\over dx^2} +\frac 1 2m\omega^2x^2\psi=E\psi$$

Introduce $\xi = x\sqrt{m\omega\over\hbar}$ and $\mathcal E={2E\over\hbar\omega}$.  
(NOTE: ${d^2\psi\over d\xi^2}={d^2\psi\over dx^2}{d^2x\over d\xi^2}={\hbar\over m\omega}{d^2\psi\over dx^2}$)
So we write:
$$-{d^2\psi\over d\xi^2} + \xi^2\psi=\mathcal E \psi$$
Now look for solutions of form $\psi(\xi)=f(\xi)e^{-\xi^2/2}$ which gives:
$$-{d^2f\over d\xi^2}+2\xi{df\over d\xi}+(1-\mathcal E)f=0$$
Now look for powerseries solution $f(\xi)=\sum_na_n\xi^n$ which gives
$$a_{n+2}={2n-\mathcal E+1\over (n+1)(n+2)}a_n$$
The series converges iff the recurrence terminates, hence eigenvalues are $\mathcal E_n=2n+1$ or $E_n=\hbar\omega(n+\frac 1 2)$. Eigenfunctions are Hermite polynomials:
$$f_n(\xi)=(-1)^ne^{\xi^2}{d^n\over d\xi^n}(e^{-\xi^2})$$
$$\psi_n=f_n(\xi)e^{-\xi^2/2}$$
