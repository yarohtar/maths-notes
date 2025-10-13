Given $f:\mathbb{B}^{k+1}\dashrightarrow \mathbb{B}$, a partial function, define:
$$
h(\vec{w})=\begin{cases}
v  &  \text{if for all }\#u\leq\#v, \text{ have }f(\vec{w},u)\downarrow \text{ and } \\
 & v \text{ is shortlex-minimal such that } f(\vec{w},v)=\epsilon \\
\uparrow & \text{otherwise}  
\end{cases}
$$
the minimisation of $f$. 

Partial recursive functions are the closure of 
[[Foundations/Computability/Gödel's primitive recursive functions]] 
under the operation of minimisation.
