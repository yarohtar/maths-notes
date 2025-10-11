Suppose $L$ is a linear functional that annihilates all polynomials in $P_n[x]$ (see [[Numerical/Approximating linear functionals]]).
Then using [[XNotes/Taylor's theorem]]:
$$f(x)=\sum_{k=0}^n f^{(k)}{(x-a)^k\over k!}+\frac 1 {n!}\int_a^x(x-\theta)^nf^{(n+1)}(\theta)d\theta$$
Rewrite this as 
$$f(x)=\sum_{k=0}^n f^{(k)}{(x-a)^k\over k!}+\frac 1 {n!}\int_a^b(x-\theta)^n_+f^{(n+1)}(\theta)d\theta$$
where $$(x-\theta)^n_+=\begin{cases}(x-\theta)^n&\theta<x\\ 0&\text{otherwise}\end{cases}$$
Then using the fact that $L$ annihilates $P_n[x]$, we have:
$$L(f)=\frac 1 {n!} \int_a^b K(\theta)f^{(n+1)}(\theta)d\theta$$
where $K(\theta)=L(x\to(x-\theta)^n_+)$ is the Peano kernel.
For example, we find:
$$|L(f)|\leq \frac {||f^{(n+1)}||_\infty} {n!} \int_a^b|K(\theta)|d\theta $$
