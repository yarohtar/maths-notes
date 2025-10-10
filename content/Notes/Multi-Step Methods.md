## Examples
[[Notes/Euler method]]
[[Notes/Reverse-Euler Method]]
[[Notes/Trapezoidal rule (ODEs)]]

## One-step method
$y_{n+1}=\phi(t_n,y_n)$

Euler method: $y_{n+1}=y_n+hf(t_n,y_n)$
#### Order:
$$\begin{gather*}y(t_n)+hf(t_n,y(t_n))-y(t_{n+1})=\\=y(t_n)+hf(t_n,y(t_n))-(y(t_n)+hf(t_n,y(t_n))+{h^2\over 2}y''(t_n))=\\=O(h^2)\end{gather*}$$
So order is $p=1$

## General multi-step methods
$$\sum_{l=0}^s\rho_ly_{n+l}=h\sum_{l=0}^s\sigma_lf(t_{n+l},y_{n+l})$$
where $\rho_s=1$.
Order of the method is the largest $p$ such that:
$$\sum_{l=0}^s\rho_ly(t_{n+l})-h\sum_{l=0}^s\sigma_ly'(t_{n+l})=O(h^{p+1})$$
By Taylor expanding, we find 
$$y(t_n)\sum_{l=0}^s\rho_l=0$$
$$h^ky^{(k)}(t_n)\left(\sum_{l=0}^s\rho_l{l^k\over k!}-\sum_{l=0}^s\sigma_l{l^{k-1}\over (k-1)!}\right)=0$$
for $k=1,2,\dots p$.
Or rewriting:
$$\sum_{l=0}^s\rho_l=0$$
$$\sum_{l=0}^s\rho_ll^k=\sum_{l=0}^s\sigma_ll^{k-1}$$
This is necessary and sufficient condition.

By defining polynomials $\rho(z)=\sum_{l=0}^s\rho_lz^l$ and $\sigma(z)=\sum_{l=0}^s\sigma_lz^l$ we can write this concisely as $$\rho(e^z)-z\sigma(e^z)=O(z^{p+1})$$
## Dahlquist Equivalence Theorem
We say a polynomial obeys the root condition if all its roots $\omega$ are $|\omega|\leq 1$ and all the roots of unit modulus are simple.
Then the multi-step method is convergent if and only if $p\geq 1$ and $\rho$ obeys the root condition.

### Constructing multi-step methods
Find a $\rho$ which obeys the root condition and $\rho(1)=0$.
Then find a $\sigma$ s.t.
$$\sigma={\rho\over \log z}+\begin{cases}O(|z-1|^{s+1})&\text{if implicit}\\O(|z-1|^s)&\text{if explicit}\end{cases}$$
To see where this comes from, sub in $z=e^x$ and note that $e^x-1=O(x)$.


$$$$