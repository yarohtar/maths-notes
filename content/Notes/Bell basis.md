Let $C$ be a [[Notes/Quantum Circuit]] which is equivalent to $CNOT\circ H\otimes I$
This transforms the basis $\{ \ket{00},\ket{01},\ket{10},\ket{11} \}$ into
the Bell basis
$$
C\ket{00} =\ket{\phi^{+}} =\frac{1}{\sqrt{ 2 }}(\ket{00} +\ket{11} )
$$
$$
C\ket{01} =\ket{\psi^{+}} =\frac{1}{\sqrt{ 2 }}(\ket{01} +\ket{10} )
$$
$$
C\ket{10} =\ket{\phi^{-}} =\frac{1}{\sqrt{ 2 }}(\ket{00} -\ket{11} )
$$
$$
C\ket{11} =\ket{\psi^{-}} =\frac{1}{\sqrt{ 2 }}(\ket{01} -\ket{10} )
$$

![[Excalidraw/Drawing 2025-02-12 10.07.07.excalidraw]]
![[Excalidraw/Bell basis 2025-02-12 10.09.10.excalidraw]]

We can also generate all the Bell states from $\ket{\phi^{+}}$ using [[Notes/Pauli Matrices]]:
$$
\ket{\phi^{-}} = Z \ket{\phi^{+}}
$$
$$
\ket{\psi^{+}} = X \ket{\phi^{+}}
$$
$$
\ket{\psi^{-}} = XZ \ket{\phi^{+}}
$$
Where $X,Z$ are acting on the second register (usually)