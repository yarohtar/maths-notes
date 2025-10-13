We are given some $f:B_{n}\to B$
$$
f(x)=\begin{cases}
1 & \text{if } x = x_{0} \\
0 & \text{otherwise}
\end{cases}
$$
Define 
$$
U_{f}\ket{x} \ket{y} =\ket{x} \ket{y\oplus f(x)}
$$
In fact, instead of using $U_{f}$, use a related 
$$
I_{x_{0}}\ket{x} =\begin{cases}
-\ket{x_{0}}  & \text{if }x=x_{0} \\
\ket{x}  & \text{if }\ket{x} \bot \ket{x_{0}} 
\end{cases}
$$
We want to find $x_{0}$ quickly.
Also let $I_{0}=I_{\ket{0\dots 0}}$

### Setup
Start with
$$
\ket{\psi_{0}} =H_{n}\ket{0} ^{\otimes n}
$$
where $H_{n}=H^{\otimes n}$
Consider acting on it by Grover iteration operator
$$
Q=-H_{n}I_{0}H_{n}I_{x_{0}}
$$
### Some facts to be proven
In the plane spanned by $\ket{x_{0}}$ and $\ket{\psi_{0}}$ $Q$ causes a rotation through an angle $2\alpha$ where
$$
\sin \alpha=\frac{1}{\sqrt{ 2^{n} }}=\frac{1}{\sqrt{ N }}
$$
In the space normal to this one, $Q=-I$

So hopefully by rotating enough, we will get a state that's close to $\ket{x_{0}}$
For large $N$, the starting angle between $\ket{x_{0}}$ and $\ket{\psi_{0}}$ will be $\approx \frac{\pi}{2}$ 
also $2\alpha\approx 2\sin \alpha=\frac{2}{\sqrt{ N }}$
so we need to rotate approximately $\frac{\sqrt{ N }\pi}{4}$
Thus $O(\sqrt{ N })$ queries suffice.
