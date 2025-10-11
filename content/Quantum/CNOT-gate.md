$$
CNOT=\begin{pmatrix}
[I] & [0] \\
[0] & [X]
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{pmatrix}
$$
$CNOT\ket{i}\ket{j}=\ket{i}\ket{i\oplus j}$
for $i,j\in \{ 0,1 \}$
So we only apply the [[Quantum/X-gate]] to the second qubit, 
if the first qubit is $\ket{1}$, otherwise everything is unchanged.

