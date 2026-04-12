const NOTES = {
    "AP Biology": {
        color: "#7c74d8",
        units: {
            "Unit 1: Chemistry of Life": {
                tags: ["characteristics of life", "feedback", "scientific method", "chemistry", "macromolecules"],
                content: `
                    <h2 id="h-ch1a">Chapter 1A: A View of Life — Overview</h2>
                    <h3>Characteristics of Life</h3>
                    <ul>
                        <li>Organized and made of at least one cell</li>
                        <li>Acquire/use materials and energy from the original source of the sun to do work and carry out all cellular processes <strong>metabolism</strong></li>
                        <li>Maintain <strong>homeostasis</strong> (stable internal balance) through negative feedback mechanisms</li>
                        <li>Respond to stimuli in environment (ex: heat, sun, plants growing against the force of gravity)</li>
                        <li>Reproduce, grow, and develop by passing on genetic info/DNA to the next generation, which is crucial for a species but not an individual</li>
                        <li>Evolve and adapt: changing environments cause populations (not individuals) to adapt/modify to function better with favorable variations selected for</li>
                    </ul>

                    <h3>Levels of Organization</h3>
                    <p>Atoms --> Molecule (2+ atoms of same/different elements) --> Cell --> Tissue --> Organ --> Organ System --> Organism (an individual) --> Population (organisms of same species in an area) --> Community (interacting living populations in an area) --> Ecosystem (living + nonliving in a particular area) --> Biome (same ecosystems all over the world) --> Biosphere (Earth)</p>

                    <h3>Feedback Mechanisms</h3>
                    <p>Used to maintain internal environments in response to internal/external changes</p>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Negative feedback</p>
                            <ul>
                                <li>Maintain homeostasis by keeping variables close to the target set point (ex: body temperature, blood glucose/pH, thermoregulation through sweating/shivering)</li>
                                <li>Body reacts to environment</li>
                                <li>Sensors detect environmental changes causing body imbalance, control/regulatory centers initiate actions to bring conditions back to normal, then once its normal, inhibitory mechanisms reverse these actions to avoid overcorrection</li>
                                <li>Dynamic equilibrium</li>
                                <li><strong>Thermoregulation:</strong> higher temperature = faster molecules = faster reactions and metabolism</li>
                                <li>Endotherms: warm-blooded, warmed by internal metabolic processes</li>
                                <li>Exotherms: cold-blooded, gaining heat from external synthesis w/ little metabolic heat</li>
                            </ul>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Positive feedback</p>
                            <ul>
                                <li>Mechanism amplifying a change and achieving a goal (NOT homeostasis or equilibrium)</li>
                                <li>Conditions moved further and further from initial set point as response gets intense, until an endpoint is reached which stops process</li>
                                <li>Usually some hormone or impulse causing the mechanism</li>
                                <li>Ex: labor onset / childbirth, breastfeeding, blood platelet activation, fruit ripening</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Scientific Method</h3>
                    <ol>
                        <li>Make observations</li>
                        <li>Pose a specific testable measurable question w/ one independent manipulated variable</li>
                        <li>Research the question</li>
                        <li>Formulate a working testable hypothesis as a statement (no words like proved/disproved, use supported/rejected/refuted/reformed)</li>
                        <li>Repeatable controlled experiment w/ multiple trials/test subjects and large sample size (n) for more accurate results, only one variable altered at a time
                            <ul>
                                <li>Controls/constants - controlled variables kept identical in all setups</li>
                                <li>Control groups - standard of comparison to validate experimental results
                                    <ul>
                                        <li>Negative control - show what happens when IV is absent or has no effect to ensure no contamination, confounders, or false positives/placebos</li>
                                        <li>Positive control - show what a known measurable response looks like to ensure experiment is working properly, no false negatives</li>
                                    </ul>
                                </li>
                                <li>Experimental groups - groups that get experimental treatment</li>
                                <li>Independent variable - manipulated variable by experimenter on x-axis</li>
                                <li>Dependent variable - variable that changes/responds to IV on y-axis</li>
                            </ul>
                        </li>
                        <li>Data collection/experimental observations through quantitative (numerical) and qualitative (descriptive) data</li>
                        <li>Data analysis through graphs, charts, tables, and stats</li>
                        <li>Make a conclusion w/o using prove/disprove, use supported/rejected/refuted</li>
                        <li>Communicate findings through peer-reviewed journals</li>
                    </ol>

                <h3>Graphs</h3>
                <p>Appropriate specific title (ex: The Effect of IV on DV), axes labels w/ units, key/legend, consistent appropriate scale w/ equal increments including the first increment (origin does not have to start at zero, breaks sometimes allowed, labeling the corner as 0 is for both x and y axis)</p>
                <div class="graph-grid">
                    <div class="graph-cell note-card-muted">
                        <p>Line graph</p>
                        <ul>
                            <li>Show relationship between 2 numerical, continuous variables</li>
                            <li>Visualize DV changes over time or across a gradient like temperature, distance, or pH</li>
                            <li>Data usually in a specific order</li>
                            <li>Points connected by a line, sometimes each point represents mean value w/ error bars</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Scatter plot</p>
                        <ul>
                            <li>Show relationships between 2 numerical, continuous variables</li>
                            <li>No inherent x-value order given on data table</li>
                            <li>Often used to look for correlation/association</li>
                            <li>Data points shouldn't be connected & are often scattered across graph</li>
                            <li>Trend line shows overall direction of relationship of correlation (can be curved but shouldn't extend past provided points)</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Bar graph</p>
                        <ul>
                            <li>Compare differences in dependent variable across categories/groups</li>
                            <li>Bars don't touch</li>
                            <li>Bar can represent mean value w/ error bars</li>
                            <li>Error bars = ±2 standard error of the means</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Histogram</p>
                        <ul>
                            <li>Display distribution of data showing central tendencies/spread (often looks like a bell curve)</li>
                            <li>Uniform range intervals</li>
                            <li>Bars touch</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Pie chart</p>
                        <ul>
                            <li>Compare different percentages/parts of a whole</li>
                            <li>Representative of proportion to full dataset</li>
                            <li>Usually categorical</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Log scale (semi-log)</p>
                        <ul>
                            <li>Uses logarithmic nonlinear scale if data spans very large quantities</li>
                            <li>Compress large range into small graph</li>
                            <li><em>The numbers with a 1, from low to high, are what you count from, and what you count by</em></li>
                            <li>Count by the same increment of 10 until the next multiple of 10</li>
                            <li>Value of a point between two tick marks is geometric mean of tickmark values: √(xy), or you can approximate by being about half the average between the lines</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Dual Y-axes</p>
                        <ul>
                            <li>Used to portray two different dependent variables w/ different units or measurement/number ranges/magnitudes</li>
                            <li>Labels on both ends, key showing different colors</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Box and whisker</p>
                        <ul>
                            <li>Compare spread and distribution summary on an interval</li>
                            <li>Show skewed data or outliers, median/middle value, range, and interquartile range (show how spread out data is)</li>
                            <li>Can be horizontal or vertical</li>
                            <li>Start line = min; start of box = Q1; middle = median (Q2); end of box = Q3; end line = max; whiskers = range; box length = IQR; points outside = outliers
                                <ul>
                                    <li>Q1 and Q3 are medians of the lower and upper halves of dataset</li>
                                    <li>Outliers can be represented as single data points outside the box/whiskers</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <h2 id="h-ch1b">Chapter 1B: Math & Statistical Applications</h2>
                <ul>
                    <li>Metric System: KHDUDCM**M**N</li>
                    <li>Mean/average = sum of all data points / # of items</li>
                    <li>Median/middle value = middle value of dataset of average of 2 middle vales</li>
                    <li>Mode = most frequent value in dataset</li>
                    <li>Range = difference between max-min</li>
                    <li><strong>Standard Deviation</strong>: measure of how far spread out a dataset is or how much it deviates/how far away it is from the mean
                        <ul>
                            <li>Higher SD = most data points are further from mean</li>
                            <li>Higher range = higher standard deviation</li>
                            <li>Zero = all values are identical</li>
                            <li>Formula on reference table: xi = value of one point, x with line over = mean, sigma = sum, n=sample size</li>
                            <li>68-95-99.7 (+- 1 std is 68%, +-2std is 95%, +-3std is 99.7% of mean) - empirical normal distribution or bell curve</li>
                        </ul>
                    </li>
                    <li><strong>Standard Error</strong>: measure how well the sample mean match up to the true population mean
                        <ul>
                            <li>Measure variation in sample means of datasets from the same population</li>
                            <li>Formula on reference table: s=standard deviation, n=sample size</li>
                            <li>Higher standard deviation = higher standard error</li>
                            <li>Error bars = +/- 2SEm above and below the bar or dot which is the mean (95% CI)
                                <ul>
                                    <li>Shows statistical significance - if the bars overlap its insignificant</li>    
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Null Hypothesis</strong>: statistical hypothesis that states that any difference between 2 factors is purely due to chance and there is no causal statistically significant relationship between 2 variables.
                        <ul>
                            <li>Or if the scenario presents statistical expectation, null hypothesis assumes outcome = statistical expectation</li>
                        </ul>
                        <div class="note-grid-2" style="margin:10px 0;">
                            <div class="note-card">
                                <p class="note-card-title">Results are significant</p>
                                <p style="margin:0;font-size:13px;">Null hypothesis is <strong>rejected</strong> — statistically significant difference.</p>
                            </div>
                            <div class="note-card">
                                <p class="note-card-title">Results are insignificant</p>
                                <p style="margin:0;font-size:13px;">Null hypothesis <strong>fails to be rejected</strong> — no statistically significant difference.</p>
                            </div>
                        </div>
                        <p style="font-size:12.5px;color:var(--ink3);margin-top:6px;">Not the same as the experimental hypothesis.</p>
                    </li>
                    <li><strong>Chi-Square Analysis</strong>: evaluate null hypothesis and see if difference in observation is significant or not in categorical data
                        <ul>
                            <li>Formula on reference table (o=observed value, e=expected value, x^2=chi square value)</li>
                            <li>Compare this value to critical chi square value table that corresponds to pvalues based on degrees of freedom</li>
                            <li>Degrees of freedom = # of outcomes/categories - 1</li>
                            <li>P-value = value between 0 and 1 determining significance, smaller (less than 0.05) is 95% CI significant</li>
                            <li>Critical chi-square values - values to use as benchmarks to compare your chi-square value at p=0.05 and p=0.01
                                <ul>
                                    <li>if value smaller than corresponding critical value  = fail to reject null</li>
                                    <li>if your chisquare is bigger = null is rejected</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 id="h-ch2a">Chapter 2A: Basic Chemistry Review</h2>
                <ul>
                    <li><strong>Matter:</strong> anything that takes up space and has mass</li>
                    <li><strong>Atom:</strong> smallest simplest unit of a substance that can't be broken down chemically or physically (+1 protons and 0 neutrons in nucleus, -1 electrons in orbitals surrounding)
                        <ul>
                            <li>If neutral, proton # = electron # (otherwise its an ion)</li>
                            <li>Protons and neutrons have 1amu mass, electrons have 1/1836amu mass (~0)</li>
                            <li>Valence electrons - electrons in valence outermost electron shell determining reactivity</li>
                            <li>Top left number is mass # (protons+neutrons), bottom left # is atomic number (# of protons which is the atom's identity)</li>
                            <li>Isotopes - atoms of same element w/ same proton number but different neutron number of mass number
                                <ul>
                                    <li>Radioisotopes — unstable nucleus, decay and emit radiation; fossil dating, radiolabeling (tracers), radiotherapy (ex: C-14, Tc-99; I-131, Co-60 for therapy)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Element:</strong>substance composed of all same type of atom (periodic table elements). CHONP is most abundant elements, with all organic compounds having C</li>
                    <li><strong>Compound:</strong> substance w/ 2 or more different chemically bonded atoms</li>
                    <li><strong>Molecule:</strong> 2 or more nonmetal atoms chemically bonded</li>
                    <li>Some substances are both compounds and molecules (different nonmetals bonded), some are only molecules (diatomics), some are only compounds (ionic compounds)</li>
                    <li><strong>Mixture</strong>: 2 or more different substances combined physically not chemically
                        <ul>
                            <li>Molarity (M) shows how concentrated solutions are (higher molarity = more concentrated)</li>
                        </ul>
                    </li>
                    <li>Memorize: PO4^3- is phosphate, NH3 is ammonia</li>
                </ul>

                <h3>Bonding</h3>
                <ul>
                    <li>Atoms bond (gain/lose/share) to complete their valence shell and form an octet of 8 valence electrons (H and He only need 2) — octet rule</li>
                    <li>Right side / nonmetals gain electrons, left side/metals lose electrons</li>
                    <li><strong>Electronegativity</strong> — atom's tendency to attract electrons; F is most electronegative (top right on periodic table = more EN; bottom left = least)</li>
                    <li>Losing electrons makes charge more positive; gaining electrons makes charge more negative</li>
                    <li>Greater EN difference = more polar bond; ionic bond if difference &gt; 1.7</li>
                </ul>
                <div class="callout">Greater EN difference → more polar. Ionic bond if EN difference &gt; 1.7.</div>
                <div class="note-grid-3">
                    <div class="note-card">
                        <p class="note-card-title">Ionic</p>
                        <ul>
                            <li>Transfer of electrons, usually metal + nonmetal; EN difference &gt; 1.7</li>
                            <li>Ion = charged particle where proton # ≠ electron #</li>
                            <li>Ex: NaCl → Na⁺ and Cl⁻</li>
                        </ul>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Polar covalent</p>
                        <ul>
                            <li>Unequal sharing between 2 different nonmetals</li>
                            <li>Higher EN atom pulls more → partial negative (δ−); other atom → partial positive (δ+)</li>
                        </ul>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Nonpolar covalent</p>
                        <ul>
                            <li>Equal sharing between 2 same nonmetals (diatomics); no EN difference</li>
                        </ul>
                    </div>
                </div>
                <h3>Molecule polarity: SNAP</h3>
                <ul>
                    <li><em>Symmetrical molecules are nonpolar, asymmetrical molecules are polar</em></li>
                    <li>Shape and charge distribution of entire molecule affects molecule polarity</li>
                </ul>
                
                <h2 id="h-ch2b">Chapter 2B: More Basic Chemistry</h2>
                <ul>
                    <li>Intramolecular forces like ionic/covalent bonding are within a molecule/compound</li>
                    <li>Intermolecular forces are between molecules/compounds like hydrogen bonding, dipole-dipole attractions, van der waals forces, and London dispersion forces</li>
                </ul>
                <h3>Hydrogen bonding</h3>
                <ul>
                    <li>Strongest type of <em>inter</em>molecular force but weaker than intramolecular forces</li>
                    <li>Attraction between partially positive hydrogen of one molecule and a small, highly electronegative partially negative atom in another (typically F, O, N)</li>
                    <li>Water, NH₃, and HF are capable of hydrogen bonding</li>
                    <li>Molecule can H-bond if: polar/has polar bonding, has a partially positive H, and has at least one F, O, or N</li>
                </ul>

                <h3>Properties of water</h3>
                <p>Life depends on water.</p>
                <p><strong>Structure:</strong> polar covalent bonding between O and H; polar/asymmetrical molecule; hydrogen bonding between molecules → unique properties.</p>
                <div class="note-grid-2">
                    <div class="note-card-muted">
                        <p class="note-card-title">High specific heat</p>
                        <p style="margin:0;font-size:12.5px;">Lots of energy needed to raise temperature because H-bonds must be broken first. Helps organisms maintain stable internal body temperature (homeostasis).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">High heat of vaporization</p>
                        <p style="margin:0;font-size:12.5px;">Lots of energy needed liquid → gas. Enables evaporative cooling (sweating) and stable body temperature.</p>
                    </div>
                    <div class="note-card-muted" style="grid-column:1/-1;">
                        <p class="note-card-title">Cohesion, adhesion &amp; surface tension</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Cohesion</strong> — attraction between same molecules. <strong>Adhesion</strong> — attraction between different molecules. <strong>Surface tension</strong> — surface molecules pulled inward. Enables capillary action, transpiration, blood flow, meniscus, insects on water.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">Ice less dense than liquid</p>
                        <p style="margin:0;font-size:12.5px;">Ice has fewer molecules per volume — stable H-bonds spread molecules apart. Lets aquatic life survive under ice (D = m/V).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">Water as solvent</p>
                        <p style="margin:0;font-size:12.5px;">Polar water dissolves polar/ionic (<strong>hydrophilic</strong>); like dissolves like — nonpolar ↔ nonpolar (<strong>hydrophobic</strong>). Phospholipids are <strong>amphipathic</strong> (polar head, nonpolar tails) → selectively permeable membranes.</p>
                    </div>
                </div>

                <h3>Acids &amp; bases</h3>
                <div class="note-grid-2" style="margin-bottom:10px;">
                    <div class="note-card">
                        <p class="note-card-title">Acids</p>
                        <p style="margin:0;font-size:12.5px;">Yield/donate H⁺ in solution. pH &lt; 7.</p>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Bases</p>
                        <p style="margin:0;font-size:12.5px;">Yield/donate OH⁻ or accept H⁺. pH &gt; 7.</p>
                    </div>
                </div>
                <ul>
                    <li><strong>pH Scale</strong>: measures acidity/basicity of solution or concentration of H+, where 7=neutral, high=basic(lessH+), low=acidic(moreH+), and each unit is a 10-fold change in H+ concentration since pH=-log(H+)</li>
                    <li>Buffers - keep pH in normal (not necessarily neutral) limits by taking up excess H+ and OH- so drastic changes don't occur. Ex: Blood buffers like carbonic acid (weak acid) or bicarbonate (weak base) keeps blood pH at 7.4 since enzymes can denature if pH changes</li>
                </ul>

                <h2 id="h-ch3">Chapter 3: Biochemistry</h2>
                <h3>Organic Compounds</h3>
                <ul>
                    <li>Compounds containing carbon and hydrogen, basis of all living organisms</li>
                    <li>Carbohydrates, lipids, proteins, nucleic acids</li>
                    <li>Carbon useful since it's small, has 4 valence electrons, shares electrons to form 4 covalent bonds making stable molecules, forms single/double/triple bonds w itself creating chains or rings or bonds w other abundant elements (CHONPS)</li>
                    <li>Most basic category of organic compounds: hydrocarbons containing only C and H which are all nonpolar and hydrophobic</li>
                    <li><strong>Functional groups</strong>: enhance diversity of organic molecules giving function, polarity, properties, replacng one or more H atoms (ex: -OH hydroxyl group, -COOH carboxyl group, -NH2 amino group, phosphate group). Ex: testosterone vs estrogen are both steroid hormone lipids w different functional groups.</li>
                    <li><strong>Isomers</strong>: same molecular formula but different structures and properties. Ex: glucose (H on top, hexagon, cell energy broken down during cell respiration for ATP), fructose (pentagon fruit and food sweetener), galactose (OH on top, hexagon, sugar less sweet than glucose/fructose, can be combined w glucose to form lactose milk sugar, can be found outside cell membrane to play role in cell-cell recognition and identity markers) all have C6H12O6 formula</li>
                </ul>
                
                <h3>Reactions making/breaking polymers</h3>
                <p>Monomers are individual repeating subunits in biomolecules, linked through covalent bonds to form a polymer (many subunits together).</p>
                <div class="note-grid-2">
                    <div class="note-card">
                        <p class="note-card-title">Dehydration synthesis</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Anabolic</strong> — monomers joined by removing water (polymerization). Requires energy.</p>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Hydrolysis</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Catabolic</strong> — bonds broken by adding water. Releases energy overall.</p>
                    </div>
                </div>

                <h3>Carbohydrates</h3>
                <ul>
                    <li>Quick energy, sugars, rice, bread, pasta</li>
                    <li>CHO in a 1:2:1 or close ratio</li>
                    <li>Generally polar & soluble in water b/c of many OH functional groups</li>
                    <li>Monomer: monosaccharide (simple single sugar) linked together through covalent bonds called glycosidic linkage</li>
                    <li><strong>Monosaccharides:</strong> provide immediate energy for cell processes, mostly in ring shape but sometimes linear. Ex: 6 carbon sugars like glucose, fructose, galactose (cell identity marker) which are isomers of C6H12O6, or 5 carbon sugars like deoxyribose (DNA) and ribose (RNA)</li>
                    <li><strong>Disaccharides:</strong> double sugars which are 2 monosacchardies joined by dehydration synthesis. Provide semi-immediate energy when broken to monosacchardies. Ex: glucose+glucose=maltose, glucose+fructose=sucrose(table sugar), glucose+galactose=lactose(milk sugar)</li>
                            <li><strong>Polysaccharides:</strong> long-term energy storage &amp; structural support
                        <ul>
                            <li>Structural variations (shape and bonding) affect function; H-bonding increases strength; helical shapes expose linkages to enzymes</li>
                        </ul>
                        <div class="note-grid-2" style="margin:10px 0;">
                            <div class="note-card-muted">
                                <p class="note-card-title">Energy storage</p>
                                <ul style="margin:0;padding-left:16px;font-size:12.5px;">
                                    <li><strong>Starch</strong> — glucose storage in plants; digestible by humans</li>
                                    <li><strong>Glycogen</strong> — glucose storage in animals (liver &amp; muscles)</li>
                                </ul>
                            </div>
                            <div class="note-card-muted">
                                <p class="note-card-title">Structural support</p>
                                <ul style="margin:0;padding-left:16px;font-size:12.5px;">
                                    <li><strong>Cellulose</strong> — plant cell walls; not digestible by humans</li>
                                    <li><strong>Chitin</strong> — fungi cell walls; crustacean exoskeletons</li>
                                </ul>
                            </div>
                        </div>
                    </li>   
                </ul>

                <h3>Lipids</h3>
                <ul>
                    <li>CHO not in 1:2:1 ratio and sometimes P</li>
                    <li>nonpolar, fats, oils, butter</li>
                    <li>Generally insoluble/nonpolar bc of long hydrocarbon chains</li>
                    <li>No monomer subunit</li>
                    <li>Ester linkage covalent bonds link lipid components together for triglycerides and phospholipids only</li>
                    <li><strong>Triglycerides</strong>(fats/oils): CHO
                        <ul>
                            <li>Main function: long term energy storage and insulation. Made of 1 glycerol and 3 fatty acids linked together</li>
                            <div class="note-grid-2" style="margin:8px 0;">
                                <div class="note-card-muted">
                                    <p class="note-card-title">Saturated fatty acids</p>
                                    <p style="margin:0;font-size:12.5px;">Single bonds; fully surrounded by H. Solid at room temp. Linked to cardiovascular issues. Ex: animal fats, butter.</p>
                                </div>
                                <div class="note-card-muted">
                                    <p class="note-card-title">Unsaturated fatty acids</p>
                                    <p style="margin:0;font-size:12.5px;">≥1 double bond → kinks. Generally liquid at room temp. Ex: plant oils (corn oil).</p>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li><strong>Phospholipids</strong>: CHOP
                        <ul>
                            <li>Main function: plasma membrane components</li>
                            <li>Structure: phosphate group PO4^3 & glycerol making up the polar hydrophillic head, 2 fatty acids nonppolar hydrophobic tails</li>
                            <li>Membrane fluidity maintained by fatty acids, since saturated fatty acids in hotter environments prevent fluidity and unsaturated/kinky fatty acids in colder environments prevent rigidity (less fluid = less permeable)</li>
                            <li>Phospholipid bilayer w nonpolar tails facing each other and polar heads facing outside since internal/external environments are mostly water so this is stable configuration</li>
                            <li>SELECTIVE PERMEABILITY: small nonpolar molecules easily pass, small polar molecules sometimes cross but usually need help from transport proteins. Ions & larger polar molecules either don't cross or need help from transport proteins. Large macromolecules like starch, proteins, and DNA don't pass since they are too big and need bulk transport, not even trasnport protein.</li>
                        </ul>
                    </li>
                    <li><strong>Steroids</strong>: CHO
                        <ul>
                            <li>Steroid - hormones that act as intracellular ligands/signalling molecules to help cells communicate</li>
                            <li>Ex: sex hormones like testosterone/estrogen help develop male/female reproductive organs and secondary sex characteristics, stress hormones like cortisol sends signals breaking down carbs/fats for energy</li>
                            <li>Cholesterol - steroid and another cell membrane component keeping membrane appropriately fluid (stabilize at high temps through weak hydrophobic fatty acid tail interactions, prevent phospholipid stiffness at lowtemps). Precursor to sex hormone production. Too much cholesterol = hydrophobic so can cause circulation disorders</li>
                            <li>Structure: four fused carbon rings: functional groups on ends add diversity</li>
                        </ul>
                    </li>
                    <li><strong>Waxes</strong>: CHO
                        <ul>
                            <li>Protection & excessive waterloss prevention since they're hydrophobic</li>
                            <li>Structure: long chain fatty acids bonded to long chain alcohols</li>
                            <li>Ex: earwax traps dust/dirt from entering ear canal, waxy plant leaf coating prevents water loss</li>
                        </ul>
                    </li>
                </ul>

                <h3>Proteins</h3>
                <ul>
                    <li>CHON and sometimes S</li>
                    <li>Monomer: amino acid (structure is a central Carbon, an amino group to the left (NH2), and a carboxyl group to the right (COOH), a Hydrogen on top, and a variant R group which makes each amino acid unique on bottom)</li>
                    <li>R groups can have a charge (ionized), different R groups affect function and folding</li>
                    <li>Amino acid sequence within a species is very similar but differs more between species caused by DNA variation (more similar DNA = more closely related organisms)</li>
                    <li>Different amino acid sequence = different shape/folding = different function since different shapes prevents enzymes or hormones or antibodies from working</li>
                    <li>Peptide covalent bonds link amino acids together in a protein</li>
                    <li>Polymer: long chain of many amino acids linked together called polypeptides</li>
                    <li>Proteins are a polypeptide chain folded into a specific shape</li>
                    <li>Polypeptide chains have directionality, the N-terminus is the amino NH2 group end and the C-terminus is the carboxyl COOH group end where new amino acids get added</li>
                    <li>Ex: enzymes speed up reactions, keratin supports hair/nails, collagen supports skin, channel/carrier proteins transport substance, hemoglobin transports O2 in blood to cells, antigens mark cells as foreign, antibody proteins made by immune system to defend against foreign invaders, insulin is a ligand protein that lowers blood glucose, HGH (human growth hormone) ligand stimulates growth in childhood and cell reproduction, neurotransmitter ligands enable nerve cell communication, protein receptors receive ligand and react, actin/myosin are contractile proteins allowing motion/muscle contractions</li>
                    <li>Different specialized cells make or activate different types of proteins in abundance</li>
                    <li>Up to 4 levels of protein structure b/c of folding (not all proteins have all 4 levels)</li>
                    <li>Chaperone proteins — help proteins fold if needed or correct misfolding</li>
                    <li>If folding is disrupted, protein denatures and all proteins work at specific temperatures and pH levels</li>
                    <li>Temperatures above optimal cause thermal agitation which disrupts bonds, pH changes alter H+ and OH- concentrations also disrupting bonds</li>
                    <li>Sometimes denaturing is reversible, sometimes not</li>
                </ul>
                <p style="font-size:12.5px;color:var(--ink3);margin:8px 0 10px;">Levels of structure:</p>
                <div class="note-grid-2">
                    <div class="note-card-muted">
                        <p class="note-card-title">1° Primary</p>
                        <p style="margin:0;font-size:12.5px;">Linear sequence of amino acids linked by peptide bonds (all proteins have this).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">2° Secondary</p>
                        <p style="margin:0;font-size:12.5px;">α-helices &amp; β-pleated sheets via H-bonding along backbone; R-groups don't contribute. Most proteins have up to this level.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">3° Tertiary</p>
                        <p style="margin:0;font-size:12.5px;">3D shape from R-group interactions: VdW, hydrophobic/hydrophilic, H-bonds, ionic, disulfide bridges. Within one chain.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">4° Quaternary</p>
                        <p style="margin:0;font-size:12.5px;">2+ folded chains interacting. Ex: hemoglobin, insulin.</p>
                    </div>
                </div>

                <h3>Nucleic acids</h3>
                <ul>
                    <li>CHONP</li>
                    <li>Monomer: nucleotides made up of a phosphate group PO4^3-, a 5 carbon sugar, and a nitrogenous base</li>
                    <li>Backbone: phosphate and sugar, Rungs: bases (purines/double-rings adenine&guanine, pyramidines/single-rings cytosine&thymine&uracil)</li>
                    <li><em>Pure as gold</em></li>
                    <li>Phosphodiester covalent bond linkage links backbones (sugar/phosphates) together</li>
                    <li>Hydrogen bonding links nitrogenous bases together in DNA (A makes 2 bonds with T, G makes 3 bonds with C)</li>
                    <li><em>AT Garden City</em></li>
                    <li><strong>DNA (Deoxyribonucleic Acid)</strong>
                        <ul>
                            <li>Polymer of nucleotides, stores genetic info and instructions for making proteins, inherited by offspring</li>
                            <li>Structure: double stranded helix with antiparallel complementary (A-T:G-C) strands</li>
                            <li>One strand runs 5' to 3', the other runs 3' to 5'</li>
                            <li>DNA is only built 5' to 3' with nucleotides added to 3' end</li>
                            <li>DNA is very stable and long-lasting</li>
                        </ul>
                    </li>
                    <li><strong>RNA (Ribonucleic Acid)</strong>
                        <ul>
                            <li>mRNA (messenger RNA) - carries message of genetic code from DNA to ribosomes for protein production</li>
                            <li>tRNA (transfer RNA) - translate/transfer mRNA into proteins by bringing amino acids to the ribosome</li>
                            <li>rRNA (ribosomal RNA) - part of ribosome structure working as an enzyme to form peptide bonds between amino acids during protein synthesis</li>
                            <li>Single stranded structure usually, A pairs w/ U instead of T</li>
                            <li>Less stable and degrades faster than DNA quickly after use</li>
                        </ul>
                    </li>
                    <li><strong>ATP (Adenosine Triphosphate)</strong>
                        <ul>
                            <li>Not a polymer</li>
                            <li>Structure: Adenine bonded to 5-carbon ribose bonded to triphosphate chain</li>
                            <li>Unstable b/c 3 phosphates repel each other</li>
                            <li>Primary energy currency — active transport, cell division, etc.</li>
                            <li><strong>ATP hydrolysis</strong> — terminal phosphate removed; releases energy; often couples to endergonic reactions</li>
                            <li><em>BARF: break absorb, release form</em></li>
                            <li>Bonds between phosphates break easily; bonds forming between water and phosphate are more stable → energy output</li>
                        </ul>
                    </li>
                </ul>
                `

            }
        }
    }
};

// functionality for switching between units &stuff
let currentClass = null;
let currentUnit = null;

function init() {
  const classList = document.getElementById('classList');
  Object.keys(NOTES).forEach(cls => {
    const btn = document.createElement('button');
    btn.className = 'class-btn';
    btn.innerHTML = `<span class="class-dot"></span>${cls}`;
    btn.onclick = () => selectClass(cls);
    classList.appendChild(btn);
  });
}

function selectClass(cls) {
  currentClass = cls;
  document.querySelectorAll('.class-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === cls);
  });
  document.getElementById('bc-class').textContent = cls;

  const unitList = document.getElementById('unitList');
  unitList.innerHTML = '';
  const units = Object.keys(NOTES[cls].units);
  units.forEach(unit => {
    const btn = document.createElement('button');
    btn.className = 'unit-btn';
    btn.textContent = unit;
    btn.onclick = () => selectUnit(cls, unit);
    unitList.appendChild(btn);
  });

  if (units.length > 0) selectUnit(cls, units[0]);
}

function selectUnit(cls, unit) {
  currentUnit = unit;
  document.querySelectorAll('.unit-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === unit);
  });

  document.getElementById('bc-class').textContent = cls;

  renderNotes(cls, unit);
}

function renderNotes(cls, unit) {
  const data = NOTES[cls].units[unit];
  const body = document.getElementById('notesBody');

  const tagsHtml = (data.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  body.innerHTML = `
    <div class="note-header">
      <h1>${unit}</h1>
      <div class="note-meta">
        <span>${cls}</span>
        <span class="note-meta-sep">|</span>
        <span>study notes</span>
      </div>
      <div class="tags-row">${tagsHtml}</div>
      <div class="divider"></div>
    </div>
    <div class="note-content">${data.content}</div>
  `;

  buildOutline();
  body.scrollTop = 0;
}

function buildOutline() {
  const body = document.getElementById('notesBody');
  const outlineList = document.getElementById('outlineList');
  outlineList.innerHTML = '';

  const headings = body.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');

  if (headings.length === 0) {
    outlineList.innerHTML = '<div style="padding:0 16px;font-size:11px;color:var(--ink3);font-family:var(--mono)">no headings found</div>';
    return;
  }

  headings.forEach((el, i) => {
    if (!el.id) el.id = 'heading-' + i;

    const btn = document.createElement('button');
    if (el.tagName === 'H2') btn.className = 'ol-h2';
    else if (el.tagName === 'H3') btn.className = 'ol-h3';
    else btn.className = 'ol-h4';

    btn.textContent = el.textContent;
    btn.onclick = () => {
      const nb = document.getElementById('notesBody');
      const elTop = el.getBoundingClientRect().top;
      const nbTop = nb.getBoundingClientRect().top;
      nb.scrollBy({ top: elTop - nbTop - 16, behavior: 'smooth' });
    };
    btn.setAttribute('data-id', el.id);
    outlineList.appendChild(btn);
  });
}

function updateScrollSpy() {
  const body = document.getElementById('notesBody');
  const headings = body.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');
  let current = null;

  headings.forEach(h => {
    if (h.getBoundingClientRect().top < 160) current = h.id;
  });

  document.querySelectorAll('.ol-h2, .ol-h3, .ol-h4').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-id') === current);
  });
}

function handleSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;

  const results = [];
  Object.entries(NOTES).forEach(([cls, clsData]) => {
    Object.entries(clsData.units).forEach(([unit, unitData]) => {
      const combined = (unit + ' ' + unitData.content).toLowerCase();
      if (combined.includes(q)) {
        results.push({ cls, unit });
      }
    });
  });

  if (results.length > 0) {
    selectClass(results[0].cls);
    selectUnit(results[0].cls, results[0].unit);
  }
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

document.getElementById('notesBody').addEventListener('scroll', updateScrollSpy);

init();