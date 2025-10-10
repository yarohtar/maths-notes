Suppose Alice has a particle in state $\ket{\psi}$ and a particle $A$
Bob also has a particle $B$ and $AB$ is in state $\ket{\phi^{+}}$ [[Notes/Bell basis]]
Aim: To send $\ket{\psi}$ to Bob but sending particles is not allowed.

Let $\ket{\psi}=\alpha \ket{0}+\beta \ket{1}$
Initial state has:
$$
\begin{align}
\ket{\psi} _{C} \ket{\phi^{+}} _{AB} =&(\alpha \ket{0} +\beta \ket{1} )\otimes \frac{1}{\sqrt{ 2 }}(\ket{00} +\ket{11} ) \\
 =&\ket{\phi^{+}} \ket{\psi} + \ket{\phi^{-}} (Z\ket{\psi} )+\ket{\psi^{+}} (X\ket{\psi} )+\ket{\psi^{-}} (XZ\ket{\psi} )\\
 =& \sum_{i,j}X^{i}Z^{j}\ket{\phi^{+}} X^{i}Z^{j}\ket{\psi}
\end{align}
$$
The way to derive this is using the identities:
$$
\begin{gather}
\ket{00} = \frac{1}{\sqrt{ 2 }}(\ket{\phi^{+}} + \ket{\phi^{-}} )\\
\ket{11} = \frac{1}{\sqrt{ 2 }}(\ket{\phi^{+}} - \ket{\phi^{-}} )\\
\ket{01} = \frac{1}{\sqrt{ 2 }}(\ket{\psi^{+}} + \ket{\psi^{-}} )\\
\ket{10} = \frac{1}{\sqrt{ 2 }}(\ket{\psi^{+}} - \ket{\psi^{-}} )\\
\end{gather}
$$
Alice does a Bell measurement with outcome $ij$ where $i,j\in \{ 0,1 \}$
She sends $ij$ to Bob.
Bob applies $Z^{j}X^{i}$ to his state which leaves him with $\ket{\psi}$.