Act on $\mathcal{H}=\mathbb{C}^{2}$ (single [[Notes/Qubit]])
$$
X=\sigma_{x}=\sigma_{1}=\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}\\
$$
$$
Y=\sigma_{y}=\sigma_{2}=\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}\\
$$
$$
Z=\sigma_{z}=\sigma_{3}=\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

#### Properties
- They are [[Notes/Hermetian]] and unitary
- They anticommute $\{ X,Y \}=0$
- They are traceless
- $\sigma_{i}\sigma_{j}=i\varepsilon_{ijk}\sigma_{k}$ (IMPORTANT PLS REMEMBER)
In standard basis:
- $X\ket{0}=\ket{1}$, $X\ket{1}=\ket{0}$ for [[Notes/Qubit]] (bitflip operator)
- $Z\ket{0}=\ket{0}$, $Z\ket{1}=-\ket{1}$ (phase flip operator)
Similarly, but swapped:
- $X\ket{+}=\ket{+}$, $X\ket{-}=-\ket{-}$
- $Z\ket{+}=\ket{-}$, $Z\ket{-}=\ket{+}$

idk why I care about these:
- $\{ I,X,Y,Z \}$ form a basis of $M_{2}(\mathbb{C}^{2})$
- [[Notes/Hilbert-Schmidt Inner Product]] satisfies $\langle A,B \rangle_{HS}=0$ for $A\neq B$ both from above basis
- Also $\langle A,A \rangle_{HS}=2$
