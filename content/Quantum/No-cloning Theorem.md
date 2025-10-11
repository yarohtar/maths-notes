$CNOT$ can copy a bit value in the first qubit:
$$
CNOT\ket{x} \ket{0} =\ket{x} \ket{x}
$$
when $x\in \{ 0,1 \}$

But can it copy a whole superposition state?
$$
CNOT\ket{\psi} \ket{0} =\ket{\psi} \ket{\psi}
$$
NO!!!
$$
CNOT\ket{\psi} \ket{0} =CNOT(a\ket{0} +b\ket{1} )\ket{0} =a\ket{00} +b\ket{11}
$$
### Theorem
Let $S$ be any set of states of a quantum system, that contains at least one pair of non orthogonal states.
Then there is no unitary cloning process that achieves cloning for all states in $S$.
#### Proof
By contradiction.
Assume there is a universal quantum cloner
Suppose $\ket{\psi}$ and $\ket{\phi}$ such that $\braket{ \psi | \phi }\neq 0$ and $\braket{ \psi | \phi }\neq 1$
Quantum cloner needs to do
$$
U\ket{\psi} \ket{0} \ket{M_{0}} =\ket{\psi} \ket{\psi} \ket{M_{\psi}} 
$$
$$
U\ket{\phi} \ket{0} \ket{M_{0}} =\ket{\phi} \ket{\phi} \ket{M_{\phi}} 
$$
Since operator is unitary
$$
\braket{ \psi | \phi } =\braket{ \psi | \phi } ^{2}\braket{ M_{\psi} | M_{\phi} }
$$
therefore 
$$
\lvert \braket{ M_{\psi }| M_{\phi} }  \rvert >1
$$
