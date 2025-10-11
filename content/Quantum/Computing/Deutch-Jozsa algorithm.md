We are given a black box function $f:B_{m}\to B$ which is either constant everywhere (i.e. either 0 or 1 everywhere)
or balanced (i.e. exactly half the inputs give 0)

We want to find whether $f$ is balanced or constant
Classically we need $O(2^{n})$ operations.

Quantum improves:
### The setting
Let $U_{f}\ket{x}\ket{y}=\ket{x}\ket{y\oplus f(x)}$
### The algorithm
#### Step 1
Initialize all qubits in state $\ket{0}^{\otimes n}\ket{0}$
#### Step 2
$$
\begin{align}
(H^{\otimes n}\otimes HX)(\ket{0} ^{\otimes n}\ket{0} )  & = \ket{+} ^{\otimes n}\otimes \ket{-}  \\
 & =\frac{1}{\sqrt{ 2^{n} }}\sum_{x\in B_{n}}\ket{x} \ket{-} \\
 & = \ket{A}  \\
\end{align}
$$
#### Step 3
$$
\begin{align}
U_{f}\ket{A}  & = \frac{1}{\sqrt{ 2^{n} }}\sum_{x\in B_{n}} U_{f}\ket{x} \ket{-}  \\
 & =\frac{1}{\sqrt{ 2^{n} }}\sum_{x\in B_{n}}(U_{f}\ket{x} (\ket{0} -\ket{1} )) \\
 & =\frac{1}{\sqrt{ 2^{n+1} }}\sum_{x\in B_{n}}(\ket{x} \ket{f(x)} -\ket{x} \ket{f(x)^{c}} )
\end{align}
$$
where $\ket{f(x)^{c}}=f(x)\oplus 1$
$$
U_{f}\ket{x} \frac{\ket{0} -\ket{1} }{\sqrt{ 2 }}=\begin{cases}
\frac{\ket{x} \ket{0} -\ket{1} }{\sqrt{ 2 }}=\ket{x} \ket{-}  & \text{if }f(x)=0 \\
-\ket{x} \ket{-}  & \text{if }f(x)=1
\end{cases}
$$
$$
U_{f}\ket{x} \ket{-} =(-1)^{f(x)}\ket{x} \ket{-} 
$$
$$
U_{f}\ket{A} =\frac{1}{\sqrt{ 2^{n} }}\left( \sum _{x\in B_{n}}(-1)^{f(x)}\ket{x}  \right)\ket{-} 
$$
#### Step 4
Discard the last qubit i.e. left with $n$ qubit state
$$
\ket{f} =\frac{1}{\sqrt{ 2^{n} }}\sum_{x\in B_{n}}(-1)^{f(x)}\ket{x} 
$$

Note that:
If $f$ is constant we can find
$$
H^{\otimes n}\ket{f} =\pm \ket{0} ^{\otimes n}
$$
If $f$ is balanced
Let 
$$
\ket{\phi_{n}} =\frac{1}{\sqrt{ 2^{n} }}\sum_{x'\in B_{n}}\ket{x'} 
$$
Take inner product 
$$
\begin{align}
\braket{ \phi_{n} | f }  & =\frac{1}{2^{n}}\sum_{x,x'\in B_{n}}(-1)^{f(x)}\braket{ x' | x }  \\
 & =\frac{1}{2^{n}}\sum_{x}(-1)^{f(x)}=0
\end{align}
$$
if $f$ is balanced.
Thus 
$$
\begin{align}
\ket{f}  & \bot \ket{\phi_{n}}  \\
H^{\otimes n}\ket{f} & \bot H_{n}\ket{\phi_{n}}  \\
H^{\otimes n} \ket{f} &  \bot \ket{0} ^{\otimes n}
\end{align}
$$
#### Step 5
Apply $H^{\otimes n}$ to $\ket{f}$
#### Step 6
Measure these $n$ qubits in a complete basis $\ket{0}\dots$
1. If $f$ is constant the outcome is $0\dots 0$
2. If $f$ is balanced then mmt outcome is NOT all 0 

### Conclusion
We have used 1 query of $U_{f}$ and another $O(n)$ other operations.