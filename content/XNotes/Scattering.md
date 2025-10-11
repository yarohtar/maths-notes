Suppose we have a particle incoming from $-\infty$ into a potential $$U(x)=\begin{cases}U_0& 0<x<a\\ 0 & \text{otherwise} \end{cases}$$
The solution will generally be:
$$\psi(x) = \begin{cases}Ae^{ikx}+Be^{-ikx} & x<0 \\ f(x) & 0<x<a\\
Ce^{ikx} & x>a\end{cases}$$
Note we don't have $e^{-ikx}$ in the case $x>a$ because there is nothing coming from the right. 

Even though this function is not normalizable, we can still see that $B$ relates to reflected state, and $C$ relates to transmitted state. As $t\to\infty$, the particle has to either reflect or transmit (it cannot stay in the middle). Hence we define
$$R={|B|^2\over |B|^2 + |C|^2}\quad\quad\quad T ={|C|^2\over |B|^2 + |C|^2}$$
where $R$ is the reflection probability, and $T$ is the transmission probability.

To find them, we impose the continuity of $\psi$ and $\psi'$ at both $x=0$ and $x=a$. 

If $U_0>E$, we call this quantum tunnelling, because in the classical case, we would have $T=0$, but here we get $T>0$. 