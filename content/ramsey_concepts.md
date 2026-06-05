# Named Concepts in Ramsey Theory
**Source**: ramsey.pdf by I.B. Leader (Michaelmas 2000)

---

## Part 1: Monochromatic Systems

### Theorem 1: Ramsey's Theorem
Whenever N(2) is 2-coloured, there exists an infinite monochromatic set.

### Theorem 2: Generalized Ramsey's Theorem (Higher-dimensional case)
Whenever N(r) is 2-coloured, there exists an infinite monochromatic set.

### Corollary 3: Finite Ramsey Theorem
Let m, r ∈ N. Then there exists n ∈ N such that whenever [n](r) is 2-coloured there is a monochromatic set M ∈ [n](m).

### Theorem 4: Canonical Ramsey Theorem
Whenever we have a colouring of N(2) with an arbitrary set of colours, there exists an infinite set where the type (pattern of colours) is constant.

### Proposition 5: Arithmetic Progression Existence in Finite Sets
Let k ∈ N. Then there exists n ∈ N such that whenever [n] is k-coloured, there exists a monochromatic arithmetic progression of length k.

---

## Part 2: Arithmetic Progressions

### Theorem 6: Van der Waerden's Theorem
Let m, k ∈ N. Then there exists n ∈ N such that whenever [n] is k-coloured, there exists a monochromatic arithmetic progression of length m.

### Corollary 7: Infinitary Van der Waerden Theorem
Whenever N is k-coloured, some colour class contains arbitrarily long arithmetic progressions.

### Theorem 8: Strengthened Van der Waerden Theorem
Let m, k ∈ N. Whenever N is k-coloured, there is an arithmetic progression of length m that contains both its first and second differences in the same colour class.

### Definition: Type n Function
A function f : N → N is of type n if there exist c, d with f(x) = c + dx and the image increases by d (i.e., f is a linear function with common difference d).

---

## Part 3: Combinatorial Lines and Higher-Dimensional Ramsey Theory

### Definition: Combinatorial Line
A set L ⊆ [m]^n (where [m]^n is the set of all sequences of length n with entries in [m]) is called a line (or combinatorial line) if there exists a non-empty set of active coordinates I such that L consists of all sequences that have fixed values on coordinates not in I.

### Definition: Active Coordinates
The set I of "variable" coordinates in a combinatorial line. Values in these positions vary across the line while values outside I are fixed.

### Theorem 9: Hales-Jewett Theorem
Let m, k ∈ N. Then there exists n ∈ N such that whenever [m]^n is k-coloured there exists a monochromatic combinatorial line.

### Theorem 10: Extended Hales-Jewett Theorem
Let m, k, d ∈ N. Then there exists n ∈ N such that whenever [m]^n is k-coloured, there exists either a monochromatic line or d linearly independent monochromatic points (depending on parameters).

### Theorem 11: Gallai's Theorem
For any finite S ⊂ ℝ^d and any k-colouring of ℝ^d, there exists a monochromatic homothetic copy of S (a scaled and translated copy).

---

## Part 4: Partition Regularity and Linear Equations

### Definition: Monochromatic Solution
Given a matrix A with rational entries and a finite colouring of N, we seek x ∈ N^n such that Ax = 0 and all coordinates of x have the same colour.

### Definition: Partition Regular (PR) Matrix
An m × n rational matrix A is partition regular if every finite colouring of N contains a monochromatic solution to Ax = 0.

### Definition: Columns Property
A matrix A with entries in Q has the columns property if there is a partition B₁ ∪ B₂ ∪ · · · ∪ Bᵣ of the set of column indices such that for each i:
- All entries in columns in Bᵢ are either all entries are non-negative and their sum is 0
- OR all entries are non-positive and their sum is 0
- This property ensures the matrix can be "solved" in a partition-regular way.

### Definition: (m, p, c)-set
A sequence x₁ < x₂ < · · · < xₘ ∈ N is an (m, p, c)-set if for some m, p, c, the sequence has specific arithmetic properties related to progressions and patterns.

### Proposition 12: Non-zero Rational Condition for PR
Let a₁, a₂, ..., aₙ be non-zero rationals. The vector (a₁ a₂ ... aₙ) is partition regular if and only if it satisfies certain divisibility conditions.

### Lemma 13: Single Colour Class Contains Solutions
Let λ ∈ Q. Then whenever N is finitely coloured, there exist monochromatic x, y, z with x + λy = z.

### Theorem 14: Rado's Theorem for Single Equations
Let a₁, a₂, ..., aₙ be non-zero rationals. Then (a₁ a₂ ... aₙ) is PR if and only if some non-empty proper subset of {1, 2, ..., n} has sum equal to 0 (where indices are weighted by their coefficients).

### Proposition 15: Columns Property as Necessary Condition
Let A be any matrix with entries in Q. If A is PR then it must have the columns property.

### Lemma 17: Columns Property Implies Effective Solutions
If A has the columns property then there exist m, p, c ∈ N such that every (m, p, c)-set contains a solution to Ax = 0.

### Theorem 18: Rado's Theorem (Complete Characterization)
Let A be a rational matrix. Then A is partition regular if and only if A has the columns property.

### Corollary 19: Consistency Theorem
If A and B are partition regular then the stacked matrix [0; A; B; 0] (in block form) is also partition regular. In other words, if we can ensure solutions to two different systems exist in monochromatic sets, we can ensure both hold simultaneously.

### Corollary 20: All PR Equations Simultaneously Solvable
Whenever N is finitely coloured, some colour class contains solutions to all PR equations.

---

## Part 5: Ultrafilters and Their Properties

### Definition: Filter
A filter F on N is a collection of subsets of N such that:
- N ∈ F
- ∅ ∉ F
- If A ∈ F and A ⊆ B ⊆ N, then B ∈ F
- If A, B ∈ F, then A ∩ B ∈ F

### Definition: Ultrafilter
An ultrafilter U is a maximal filter - a filter such that for every A ⊆ N, either A ∈ U or A^c ∈ U (exactly one).

### Definition: Principal Ultrafilter
For a fixed n ∈ N, the ultrafilter ñ = {A ⊆ N : n ∈ A} (all sets containing n).

### Definition: Non-principal Ultrafilter
An ultrafilter U that is not of the form ñ for any n. These do not correspond to single points and require the Axiom of Choice to exist.

### Proposition 21: Ultrafilter Characterization
A filter F is an ultrafilter if and only if for all A ⊂ N, either A ∈ F or A^c ∈ F (exactly one).

### Proposition 22: Ultrafilter Extension
Every filter is contained in an ultrafilter.

---

## Part 6: Stone-Čech Compactification βN

### Definition: Stone-Čech Compactification βN
The set of all ultrafilters on N, equipped with the topology where basic open sets are C_A = {U : A ∈ U} for A ⊆ N.

### Definition: Basic Open Set in βN
For A ⊆ N, the set C_A = {U ∈ βN : A ∈ U} forms a base for the topology on βN.

### Theorem 23: βN is Compact Hausdorff Space
βN (the Stone-Čech compactification of N) is a compact Hausdorff topological space.

---

## Part 7: Ultrafilter Arithmetic and Idempotent Elements

### Definition: Universal Quantification over Ultrafilter
For an ultrafilter U and a statement p(x), we write ∀_U x p(x) to mean {x : p(x)} ∈ U, and say that p(x) holds "for most x" or "for U-most x".

### Proposition 24: Logical Properties of Ultrafilter Quantifiers
Let U be an ultrafilter and p, q be statements. Then:
- (i) ∀_U x (p(x) AND q(x)) ⟺ (∀_U x p(x)) AND (∀_U x q(x))
- (ii) ∀_U x (p(x) OR q(x)) ⟺ (∀_U x p(x)) OR (∀_U x q(x))
- (iii) If ∀_U x p(x) is false, then ∀_U x (NOT p(x)) holds

### Definition: Addition Operation on Ultrafilters
For U, V ∈ βN, define U + V = {A ⊂ N : ∀_U x ∀_V y x + y ∈ A}

### Proposition 25: Addition on Ultrafilters is Well-defined
The operation + : βN × βN → βN defined above is associative and left-continuous.

### Definition: Idempotent Ultrafilter
An ultrafilter U such that U + U = U (an ultrafilter that is closed under addition with itself).

### Lemma 26: Idempotent Lemma
Suppose X is a non-empty compact Hausdorff topological space and + : X × X → X is an associative and left-continuous binary operation. Then there exists an element x ∈ X such that x + x = x.

### Corollary 27: Existence of Idempotent Ultrafilter
There exists U ∈ βN such that U + U = U.

### Theorem 28: Hindman's Theorem
Whenever N is finitely coloured, there exist x₁, x₂, x₃, ... with FS(x₁, x₂, x₃, ...) monochromatic (all finite sums of distinct elements are the same colour).

---

## Part 8: Infinite Ramsey Theory and Topology on N^(ω)

### Definition: N^(ω) (Infinite Subsets)
For M ⊂ N, write M^(ω) for the collection {L ⊂ M : L infinite} of all infinite subsets of M.

### Definition: Ramsey Collection
A collection Y ⊂ N^(ω) is called Ramsey if there exists M ∈ N^(ω) with M^(ω) ⊂ Y or M^(ω) ⊂ Y^c (i.e., one colour class is entirely contained or entirely outside Y).

### Proposition 29: Non-existence of Monochromatic Sets
There is a 2-colouring of N^(ω) without an infinite monochromatic set (i.e., there exist partitions of N^(ω) into two sets such that neither contains all infinite subsets of some M).

### Definition: τ-topology (Usual/Product Topology)
The subspace topology on N^(ω) ⊂ P(N), identified with {0,1}^N with product topology. Basic open sets are {L ∈ N^(ω) : L ∩ [n] = M ∩ [n]} for various n.

### Definition: Metric on N^(ω)
d(L, M) = 0 if L = M, and d(L, M) = 1/min(L∆M) if L ≠ M

### Definition: (A, M)^(ω) (Basic Set)
For A ∈ N^(<ω) and M ∈ N^(ω), the set (A, M)^(ω) = {L ∈ N^(ω) : A is an initial segment of L and L − A ⊂ M} (sets that "start as A and carry on inside M").

### Definition: Acceptance and Rejection
- M **accepts** A (into Y) if (A, M)^(ω) ⊂ Y
- M **rejects** A if no L ∈ M^(ω) accepts A

### Lemma 30: Galvin-Prikry Lemma
Given Y ⊂ N^(ω), there exists a set M ∈ N^(ω) such that either:
- (i) M accepts ∅ into Y, or
- (ii) M rejects all of its finite subsets

### Theorem 31: Open Sets are Ramsey (τ-topology)
If Y is open (in the τ-topology) then Y is Ramsey.

### Definition: ?-topology (Ellentuck/Mathias Topology)
The topology on N^(ω) with basic open sets (A, M)^(ω) for A ∈ N^(<ω) and M ∈ N^(ω). This is stronger than the τ-topology (has more open sets).

### Theorem 32: ?-open Sets are Ramsey
If Y is ?-open then Y is Ramsey.

### Definition: Completely Ramsey Collection
Y ⊂ N^(ω) is completely Ramsey if for all A ∈ N^(<ω) and all M ∈ N^(ω), there exists some L ∈ M^(ω) such that (A, L)^(ω) is contained in either Y or Y^c.

### Theorem 33: ?-open Sets are Completely Ramsey
If Y is ?-open then Y is completely Ramsey.

### Definition: Nowhere Dense Set (in ?-topology)
A set Y ⊂ N^(ω) is ?-nowhere-dense if for all A ∈ N^(<ω) and all M ∈ N^(ω), there exists some L ∈ M^(ω) with (A, L)^(ω) ⊂ Y^c (can always find a basic open set avoiding Y).

### Proposition 34: Characterization of ?-nowhere-dense Sets
A set Y ⊂ N^(ω) is ?-nowhere-dense if and only if for all A ∈ N^(<ω) and all M ∈ N^(ω), there is some L ∈ M^(ω) with (A, L)^(ω) ⊂ Y^c.

### Definition: Meagre Set (First Category)
A subset A of a topological space X is meagre or of first category if A = ⋃_{n=1}^∞ A_n with each A_n nowhere dense.

### Theorem 35: ?-meagre Sets are Completely Ramsey
Let Y be ?-meagre. Then for all A ∈ N^(<ω) and all M ∈ N^(ω), there is some L ∈ M^(ω) such that (A, L)^(ω) ⊂ Y^c. In particular, Y is ?-nowhere-dense.

### Definition: Baire Set (Property of Baire)
A set A in a topological space is a Baire set, or has the property of Baire, if A = O∆M for some open O and meagre M (symmetric difference).

### Theorem 36: Completely Ramsey iff ?-Baire
A collection Y is completely Ramsey if and only if it is ?-Baire (equals the symmetric difference of an open set and a meagre set).

---

## Summary of Main Theorems

| # | Name | Domain |
|---|------|--------|
| 1 | Ramsey's Theorem | 2-colourings of N^(2) |
| 2 | Generalized Ramsey | r-tuples for any r |
| 4 | Canonical Ramsey | Colour patterns in finite sets |
| 6 | Van der Waerden | Arithmetic progressions |
| 9 | Hales-Jewett | Combinatorial lines |
| 11 | Gallai | Geometric homothetic copies |
| 14 | Rado (equations) | Single linear equations |
| 18 | Rado (matrices) | Systems of equations |
| 28 | Hindman | Finite sums FS(x₁, x₂, ...) |
| 36 | Completely Ramsey | Topological characterization |

---

## Index of Concepts by Type

### Combinatorial Theorems
- Ramsey's Theorem (Theorems 1, 2)
- Canonical Ramsey Theorem (Theorem 4)
- Van der Waerden's Theorem (Theorem 6)
- Hales-Jewett Theorem (Theorem 9)
- Extended Hales-Jewett Theorem (Theorem 10)
- Gallai's Theorem (Theorem 11)
- Hindman's Theorem (Theorem 28)

### Algebraic/Linear Systems
- Rado's Theorem (single equations) (Theorem 14)
- Rado's Theorem (general) (Theorem 18)
- Columns Property (Definition)
- Partition Regularity (Definition)

### Ultrafilter Theory
- Ultrafilter (Definition)
- Principal Ultrafilter (Definition)
- Stone-Čech Compactification βN (Definition)
- Idempotent Ultrafilter (Definition)
- Idempotent Lemma (Lemma 26)

### Topological Ramsey Theory
- τ-topology (Definition)
- ?-topology / Ellentuck topology (Definition)
- Ramsey Collection (Definition)
- Completely Ramsey Collection (Definition)
- Meagre Set / First Category (Definition)
- Baire Set (Definition)

