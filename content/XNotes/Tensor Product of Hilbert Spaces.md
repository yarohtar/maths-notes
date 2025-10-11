More complicated systems require "larger" Hilbert spaces. We can build these by taking tensor products

Let $dim(\mathcal{H}_{1}),dim(\mathcal{H}_{2})<\infty$ and let $\{ e_{a} \}\in \mathcal{H}_{1}$ and $\{ f_{\alpha} \}\in \mathcal{H}_{2}$ be orthonormal bases.
Then
$$
\mathcal{H}=\mathcal{H}_{1}\otimes  \mathcal{H}_{2}
$$
is the tensor product that contains all elements of form
$$
\ket{\psi} =\sum_{a,\alpha}c_{a,\alpha}\ket{e_{a}} \otimes  \ket{f_{\alpha}}
$$
The inner product is defined on basis elements
$$
(\bra{e_{a}} \otimes  \bra{f_{\alpha}} ,\ \ket{e_{b}} \otimes  \ket{f_{\beta}} )=\braket{ e_{a} | e_{b} } \braket{ f_{\alpha} | f_{\beta} } \in \mathbb{C}
$$


In $\mathbb{R}^3$ we'll use the shorthand notation 
$$
\ket{\psi} =\int \psi(\underline{x})\ket{\underline{x}} d^3x
$$
where $\psi(\underline{x})=\psi(x,y,z)$ and $\ket{\underline{x}}=\ket{x}\otimes \ket{y}\otimes \ket{z}$


### Examples
- Hydrogen atom is described by the Hamiltonian
$H=\frac{p_{p}^{2}}{2m_{p}}\otimes\mathbb 1_{e}+1_{p}\otimes \frac{p_{e}^2}{2m_{e}}-\frac{q^{2}}{4\pi \varepsilon_{0}} \frac{1}{|x_{e}-x_{p}|}$
- A 2-[[XNotes/Qubit]] system $\mathcal{H}\simeq \mathcal{H}_{1}\otimes \mathcal{H}_{2}=(\mathbb{C}^{2})^{\otimes 2}$
$\{ \ket{0},\ket{1} \}$ is the onb basis of $\mathbb{C}^2$
$\{ \ket{0}\otimes \ket{0},\ket{0}\otimes \ket{1},\ket{1}\otimes \ket{0},\ket{1}\otimes \ket{1} \}$ is the onb of $\mathcal{H}$
and to calculate them we use:
$$
\begin{pmatrix}
a_{1} \\
a_{2}
\end{pmatrix}
\otimes 
\begin{pmatrix}
b_{1} \\
b_{2}
\end{pmatrix}
=
\begin{pmatrix}
a_{1}b_{1} \\
a_{1}b_{2} \\
a_{2}b_{1} \\
a_{2}b_{2} 
\end{pmatrix}
$$
We will also use $\ket{a}\otimes \ket{b}=\ket{a}\ket{b}=\ket{ab}$.
- $$
A\otimes B=\begin{pmatrix}
a_{11}B & a_{12}B \\
 a_{21}B & a_{22}B
\end{pmatrix}
$$
- $A\otimes B=(A\otimes I)(I\otimes B)$
- $\bra{u}\bra{v}A\otimes B\ket{c}\ket{d}=\bra{u}A\ket{c}\bra{v}B\ket{d}$
